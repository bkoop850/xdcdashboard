import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from '@filament/react/card';
import { Item, Section } from '@filament/react/common';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@filament/react/dialog';
import { FlexBox } from '@filament/react/layout';
import { MenuButton } from '@filament/react/menu-button';
import { Button } from '@filament/react/button';
import { Heading, Text } from '@filament/react/text';
import { clsx } from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { PageTitleProvider } from '~/providers';

import {
  businessClusters,
  levels,
  xdcImpactFactor,
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
    onPress={onPress}
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

const ImpactScoreCard = ({
  score,
  onPress,
}: {
  score: ImpactScore;
  onPress?: () => void;
}) => (
  <Card
    className={clsx(styles.impactCard, onPress && styles.clickableCard)}
    onPress={onPress}
  >
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
      {onPress && (
        <Text variant="reference-s" color="secondary" className={styles.impactHint}>
          View KPI build-up →
        </Text>
      )}
    </CardBody>
  </Card>
);

const HeroImpactCard = ({
  score,
  onPress,
}: {
  score: ImpactScore;
  onPress?: () => void;
}) => (
  <Card
    className={clsx(styles.heroCard, onPress && styles.clickableCard)}
    onPress={onPress}
  >
    <CardBody>
      <Text variant="reference-m" color="secondary" className={styles.heroLabel}>
        {score.label}
      </Text>
      <div className={styles.heroValue}>{score.value}</div>
      <Text
        variant="reference-s"
        color={score.direction === 'positive' ? 'signalSuccess' : 'signalError'}
        className={styles.impactChange}
      >
        {score.change}
      </Text>
      {score.buildup && (
        <Text variant="reference-s" color="secondary" className={styles.heroDescription}>
          {score.buildup.description}
        </Text>
      )}
      {onPress && (
        <Text variant="reference-s" color="secondary" className={styles.impactHint}>
          View KPI build-up →
        </Text>
      )}
    </CardBody>
  </Card>
);

const ImpactBuildupDialog = ({
  score,
  onDismiss,
}: {
  score: ImpactScore | null;
  onDismiss: () => void;
}) => (
  <Dialog
    isOpen={score !== null}
    onDismiss={onDismiss}
    isDismissable
    showCloseButton
  >
    <DialogTitle>{score?.label} — KPI Build-up</DialogTitle>
    <DialogContent>
      {score?.buildup && (
        <>
          <div className={styles.modalSection}>
            <div className={styles.modalSectionTitle}>
              Strategic Outcome: {score.buildup.outcome}
            </div>
            <Text variant="reference-s" color="secondary">
              {score.buildup.description}
            </Text>
          </div>

          <div className={styles.modalSection}>
            <div className={styles.modalSectionTitle}>How it is calculated</div>
            <div className={styles.buildupFormula}>{score.buildup.formula}</div>
          </div>

          <div className={styles.modalSection}>
            <div className={styles.modalSectionTitle}>Contributing dimensions</div>
            <div className={styles.buildupList}>
              {score.buildup.contributors.map((c) => (
                <div key={c.dimension} className={styles.buildupRow}>
                  <div className={styles.buildupRowHeader}>
                    <span className={styles.buildupDimension}>{c.dimension}</span>
                    <span className={styles.buildupWeight}>{c.weight}</span>
                  </div>
                  <Text variant="reference-s" color="secondary">
                    {c.rationale}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modalSection}>
            <div className={styles.modalSectionTitle}>Roll-up across levels</div>
            <Text variant="reference-s" color="secondary">
              {score.buildup.rollup}
            </Text>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);

const DimensionDetailDialog = ({
  dimension,
  onDismiss,
}: {
  dimension: DimensionData | null;
  onDismiss: () => void;
}) => (
  <Dialog isOpen={dimension !== null} onDismiss={onDismiss} isDismissable showCloseButton>
    <DialogTitle>{dimension?.title} — Detail</DialogTitle>
    <DialogContent>
      {dimension?.detail?.map((section) => (
        <div key={section.title} className={styles.modalSection}>
          <div className={styles.modalSectionTitle}>{section.title}</div>
          <div className={styles.modalGrid}>
            {section.stats.map((item) => (
              <div key={item.label} className={styles.modalStat}>
                <Text variant="reference-s" color="secondary" className={styles.modalStatLabel}>
                  {item.label}
                </Text>
                <div className={styles.modalStatValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </DialogContent>
  </Dialog>
);

export const Dashboard = () => {
  const [detailDimension, setDetailDimension] = useState<DimensionData | null>(null);
  const [buildupScore, setBuildupScore] = useState<ImpactScore | null>(null);
  const [activeLevel, setActiveLevel] = useState<string>('snapshot');
  const [hasSelectedDeepdive, setHasSelectedDeepdive] = useState(false);
  const [selectedBu, setSelectedBu] = useState<string>('Ambulatory Monitoring & Diagnostics');
  const { setPageTitle } = useContext(PageTitleProvider);

  const buUrlByName = new Map<string, string>();
  businessClusters.forEach((cluster) => {
    buUrlByName.set(cluster.name, cluster.url);
    cluster.subBusinesses.forEach((sub) => buUrlByName.set(sub.name, sub.url));
  });

  const handleBuAction = (key: string) => {
    const url = buUrlByName.get(key);
    if (url) {
      setSelectedBu(key);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const currentLevel = levels.find((l) => l.id === activeLevel);

  const impactLevelIds = ['maturity', 'philips', 'business', 'product'];
  const isImpactActive = impactLevelIds.includes(activeLevel);

  const deepdiveLabels: Record<string, string> = {
    maturity: 'XDC Maturity',
    philips: 'Philips Impact',
    business: 'Business Unit Impact',
    product: 'Project Impact',
  };

  useEffect(() => {
    setPageTitle('');
  }, [activeLevel, setPageTitle]);

  const renderSnapshot = () => {
    const snapshotLevels = levels.filter(
      (l) => l.id === 'maturity' || l.id === 'philips',
    );
    return (
      <div className={styles.snapshotContainer}>
        <HeroImpactCard
          score={xdcImpactFactor}
          onPress={() => setBuildupScore(xdcImpactFactor)}
        />
        {snapshotLevels.map((level) => (
          <div key={level.id} className={styles.snapshotGroup}>
            <Heading variant="heading-s" elementType="h2">
              {level.label}
            </Heading>
            <div className={styles.impactScoresGrid}>
              {level.impactScores.map((score) => (
                <ImpactScoreCard
                  key={score.label}
                  score={score}
                  onPress={score.buildup ? () => setBuildupScore(score) : undefined}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderLevelContent = (level: typeof levels[number]) => (
    <>
      {(level.id === 'business' || level.id === 'product') && (
        <FlexBox
          alignItems="center"
          justifyContent="end"
          gap={12}
          className={styles.buSelectorRow}
        >
          <MenuButton
            variant="secondary"
            buttonContent={selectedBu}
            onAction={(key) => { if (key) handleBuAction(key as string); }}
          >
            {businessClusters.map((cluster) => (
              <Section key={cluster.name} title={cluster.name}>
                {[
                  <Item key={cluster.name}>{cluster.name} — Overview</Item>,
                  ...cluster.subBusinesses.map((sub) => (
                    <Item key={sub.name}>{sub.name}</Item>
                  )),
                ]}
              </Section>
            ))}
          </MenuButton>
          {level.id === 'product' && (
            <MenuButton
              variant="secondary"
              buttonContent="ECG reports"
            >
              {[]}
            </MenuButton>
          )}
        </FlexBox>
      )}
      <div className={styles.impactScoresGrid}>
        {level.impactScores.map((score) => (
          <ImpactScoreCard
            key={score.label}
            score={score}
            onPress={score.buildup ? () => setBuildupScore(score) : undefined}
          />
        ))}
      </div>
      <div className={styles.dimensionsGrid}>
        {level.dimensions.map((dimension) => (
          <DimensionCard
            key={dimension.title}
            dimension={dimension}
            onPress={
              dimension.detail
                ? () => setDetailDimension(dimension)
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
        <div className={clsx(styles.tabItem, activeLevel === 'snapshot' && styles.tabItemActive)}>
          <Button
            variant="quiet"
            onPress={() => {
              setActiveLevel('snapshot');
              setHasSelectedDeepdive(false);
            }}
          >
            Impact Snapshot
          </Button>
        </div>
        <div className={clsx(styles.tabItem, isImpactActive && styles.tabItemActive)}>
          <MenuButton
            variant="quiet"
            buttonContent={
              isImpactActive && hasSelectedDeepdive
                ? `Impact Deepdives: ${deepdiveLabels[activeLevel]}`
                : 'Impact Deepdives'
            }
            onAction={(key) => {
              if (key) {
                setActiveLevel(key as string);
                setHasSelectedDeepdive(true);
              }
            }}
          >
            <Item key="maturity">XDC Maturity</Item>
            <Item key="philips">Philips Impact</Item>
            <Item key="business">Business Unit Impact</Item>
            <Item key="product">Project Impact</Item>
          </MenuButton>
        </div>
      </FlexBox>

      <div className={styles.tabPanel}>
        {activeLevel === 'snapshot'
          ? renderSnapshot()
          : currentLevel && renderLevelContent(currentLevel)}
      </div>

      <DimensionDetailDialog
        dimension={detailDimension}
        onDismiss={() => setDetailDimension(null)}
      />

      <ImpactBuildupDialog
        score={buildupScore}
        onDismiss={() => setBuildupScore(null)}
      />
    </div>
  );
};
