import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from '@filament/react/card';
import { Item } from '@filament/react/common';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@filament/react/dialog';
import { FlexBox } from '@filament/react/layout';
import { SplitButton } from '@filament/react/split-button';
import { Button } from '@filament/react/button';
import { Heading, Text } from '@filament/react/text';
import { clsx } from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { PageTitleProvider } from '~/providers';

import {
  levels,
  telemetryModalData,
  type DimensionData,
  type ImpactScore,
  type Kpi,
  type KpiStatus,
} from './data';
import * as styles from './styles.css';

const statusLabel: Record<KpiStatus, string> = {
  'on-track': 'On Track',
  'at-risk': 'At Risk',
  'off-track': 'Off Track',
};

const statusStyle: Record<KpiStatus, string> = {
  'on-track': styles.statusOnTrack,
  'at-risk': styles.statusAtRisk,
  'off-track': styles.statusOffTrack,
};

const KpiItem = ({ kpi }: { kpi: Kpi }) => (
  <div className={styles.kpiItem}>
    <div className={styles.kpiHeader}>
      <span className={styles.kpiName}>{kpi.name}</span>
      <div className={styles.kpiStatusWrapper}>
        <div className={clsx(styles.statusDot, statusStyle[kpi.status])} />
        <span>{statusLabel[kpi.status]}</span>
      </div>
    </div>
    <div className={styles.kpiMetrics}>
      <span>
        <span className={styles.metricValue}>{kpi.currentValue}</span>{' '}
        {kpi.currentLabel}
      </span>
      <span>
        <span className={styles.metricValue}>{kpi.targetValue}</span>{' '}
        {kpi.targetLabel}
      </span>
    </div>
  </div>
);

const DimensionCard = ({
  dimension,
  onPress,
}: {
  dimension: DimensionData;
  onPress?: () => void;
}) => (
  <Card
    className={clsx(styles.dimensionCard, onPress && styles.clickableCard)}
    onClick={onPress}
  >
    <CardHeader>
      <CardTitle>{dimension.title}</CardTitle>
    </CardHeader>
    <CardBody>
      {dimension.kpis.map((kpi) => (
        <KpiItem key={kpi.name} kpi={kpi} />
      ))}
    </CardBody>
  </Card>
);

const ImpactScoreCard = ({ score }: { score: ImpactScore }) => (
  <Card className={styles.impactCard}>
    <CardBody>
      <Text variant="reference-m" color="secondary" className={styles.impactLabel}>
        {score.label}
      </Text>
      <div className={styles.impactValue}>{score.value}</div>
      <Text
        variant="reference-s"
        color={score.direction === 'positive' ? 'signalSuccess' : 'signalError'}
        className={styles.impactChange}
      >
        {score.change}
      </Text>
    </CardBody>
  </Card>
);

const TelemetryDialog = ({
  isOpen,
  onDismiss,
}: {
  isOpen: boolean;
  onDismiss: () => void;
}) => (
  <Dialog isOpen={isOpen} onDismiss={onDismiss} isDismissable showCloseButton>
    <DialogTitle>UX Telemetry Deep Dive</DialogTitle>
    <DialogContent>
      <div className={styles.modalSection}>
        <div className={styles.modalSectionTitle}>Session Metrics</div>
        <div className={styles.modalGrid}>
          {telemetryModalData.sessionMetrics.map((item) => (
            <div key={item.label} className={styles.modalStat}>
              <Text variant="reference-s" color="secondary" className={styles.modalStatLabel}>
                {item.label}
              </Text>
              <div className={styles.modalStatValue}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.modalSection}>
        <div className={styles.modalSectionTitle}>Performance Metrics</div>
        <div className={styles.modalGrid}>
          {telemetryModalData.performanceMetrics.map((item) => (
            <div key={item.label} className={styles.modalStat}>
              <Text variant="reference-s" color="secondary" className={styles.modalStatLabel}>
                {item.label}
              </Text>
              <div className={styles.modalStatValue}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.modalSection}>
        <div className={styles.modalSectionTitle}>User Engagement</div>
        <div className={styles.modalGrid}>
          {telemetryModalData.userEngagement.map((item) => (
            <div key={item.label} className={styles.modalStat}>
              <Text variant="reference-s" color="secondary" className={styles.modalStatLabel}>
                {item.label}
              </Text>
              <div className={styles.modalStatValue}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export const Dashboard = () => {
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState<string>('maturity');
  const { setPageTitle } = useContext(PageTitleProvider);

  const currentLevel = levels.find((l) => l.id === activeLevel);

  useEffect(() => {
    setPageTitle(currentLevel?.appTitle ?? '');
  }, [currentLevel, setPageTitle]);

  const renderLevelContent = (level: typeof levels[number]) => (
    <>
      <div className={styles.impactScoresGrid}>
        {level.impactScores.map((score) => (
          <ImpactScoreCard key={score.label} score={score} />
        ))}
      </div>
      <div className={styles.dimensionsGrid}>
        {level.dimensions.map((dimension) => (
          <DimensionCard
            key={dimension.title}
            dimension={dimension}
            onPress={
              dimension.title === 'UX Telemetry'
                ? () => setIsTelemetryOpen(true)
                : undefined
            }
          />
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.page}>
      <Heading variant="heading-l" elementType="h1">XDC Impact</Heading>

      <FlexBox alignItems="center" gap={0} className={styles.tabBar}>
        <div className={clsx(styles.tabItem, activeLevel === 'maturity' && styles.tabItemActive)}>
          <Button
            variant="quiet"
            onPress={() => setActiveLevel('maturity')}
          >
            Maturity
          </Button>
        </div>
        <div className={clsx(styles.tabItem, activeLevel !== 'maturity' && styles.tabItemActive)}>
          <SplitButton
            variant="quiet"
            defaultSelectedKey="philips"
            onAction={(key) => { if (key) setActiveLevel(key as string); }}
          >
            <Item key="philips">Philips Impact</Item>
            <Item key="business">BU Impact</Item>
            <Item key="product">Product Impact</Item>
          </SplitButton>
        </div>
      </FlexBox>

      <div className={styles.tabPanel}>
        {currentLevel && renderLevelContent(currentLevel)}
      </div>

      <TelemetryDialog
        isOpen={isTelemetryOpen}
        onDismiss={() => setIsTelemetryOpen(false)}
      />
    </div>
  );
};
