import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from '@filament/react/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@filament/react/dialog';
import { Heading, Text } from '@filament/react/text';
import { clsx } from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { PageTitleProvider } from '~/providers';

import {
  businessOutcomes,
  capabilityDrivers,
  capabilityEffectiveness,
  qualityImpact,
  type BusinessOutcome,
  type CapabilityDriver,
  type CapabilityEffectiveness,
  type KpiStatus,
  type Metric,
  type QualityImpact,
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

const metricItemStyle: Record<KpiStatus, string> = {
  'on-track': styles.metricItemOnTrack,
  'at-risk': styles.metricItemAtRisk,
  'off-track': styles.metricItemOffTrack,
};

const MetricItem = ({ metric }: { metric: Metric }) => (
  <div className={clsx(styles.metricItem, metricItemStyle[metric.status])}>
    <div className={styles.metricHeader}>
      <span className={styles.metricLabel}>{metric.label}</span>
      <div className={styles.metricStatusWrapper}>
        <div className={clsx(styles.statusDot, statusStyle[metric.status])} />
        <span>{statusLabel[metric.status]}</span>
      </div>
    </div>
    <div className={styles.metricValue}>
      {metric.before ? (
        <>
          <span className={styles.beforeValue}>{metric.before}</span>
          <span className={styles.arrow}>→</span>
          <span>{metric.value}</span>
        </>
      ) : (
        metric.value
      )}
    </div>
  </div>
);

/* ── Cards ── */

const OutcomeCard = ({
  outcome,
  onPress,
}: {
  outcome: BusinessOutcome;
  onPress: () => void;
}) => (
  <Card className={clsx(styles.outcomeCard, styles.clickableCard)} onPress={onPress}>
    <CardBody>
      <Text variant="reference-m" color="secondary" className={styles.outcomeLabel}>
        {outcome.name}
      </Text>
      <div className={styles.outcomeValue}>{outcome.value}</div>
      <Text
        variant="reference-s"
        color={outcome.direction === 'positive' ? 'signalSuccess' : 'signalError'}
      >
        {outcome.change}
      </Text>
    </CardBody>
  </Card>
);

const QualityImpactCard = ({
  item,
  onPress,
}: {
  item: QualityImpact;
  onPress: () => void;
}) => {
  const capName = capabilityEffectiveness.find((c) => c.id === item.capability)?.name ?? '';
  return (
    <Card className={clsx(styles.effectivenessCard, styles.clickableCard)} onPress={onPress}>
      <CardHeader>
        <CardTitle>{capName}</CardTitle>
      </CardHeader>
      <CardBody>
        <div className={styles.metricsGrid}>
          {item.metrics.map((metric) => (
            <MetricItem key={metric.label} metric={metric} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

const EffectivenessCard = ({
  capability,
  onPress,
}: {
  capability: CapabilityEffectiveness;
  onPress: () => void;
}) => (
  <Card className={clsx(styles.effectivenessCard, styles.clickableCard)} onPress={onPress}>
    <CardHeader>
      <CardTitle>{capability.name}</CardTitle>
    </CardHeader>
    <CardBody>
      <div className={styles.metricsGrid}>
        {capability.metrics.map((metric) => (
          <MetricItem key={metric.label} metric={metric} />
        ))}
      </div>
    </CardBody>
  </Card>
);

const DriverCard = ({
  driver,
  onPress,
}: {
  driver: CapabilityDriver;
  onPress: () => void;
}) => (
  <Card className={clsx(styles.driverCard, styles.clickableCard)} onPress={onPress}>
    <CardHeader>
      <CardTitle>{driver.name}</CardTitle>
    </CardHeader>
    <CardBody>
      {driver.metrics.map((metric) => (
        <MetricItem key={metric.label} metric={metric} />
      ))}
    </CardBody>
  </Card>
);

/* ── Dialogs ── */

const OutcomeDialog = ({
  outcome,
  onDismiss,
}: {
  outcome: BusinessOutcome | null;
  onDismiss: () => void;
}) => (
  <Dialog isOpen={outcome !== null} onDismiss={onDismiss} isDismissable showCloseButton>
    <DialogTitle>{outcome?.name}</DialogTitle>
    <DialogContent>
      {outcome && (
        <>
          <div className={styles.dialogMetric}>
            <div className={styles.dialogMetricValue}>{outcome.value}</div>
            <Text
              variant="reference-s"
              color={outcome.direction === 'positive' ? 'signalSuccess' : 'signalError'}
            >
              {outcome.change}
            </Text>
          </div>
          <div className={styles.dialogSection}>
            <Text variant="reference-s" color="secondary">
              {outcome.description}
            </Text>
          </div>
          <div className={styles.dialogSection}>
            <div className={styles.dialogSectionTitle}>Contributed to by</div>
            <div className={styles.dialogChips}>
              {qualityImpact
                .filter((qi) => qi.contributesTo.includes(outcome.id))
                .map((qi) => (
                  <span key={qi.id} className={styles.dialogChip}>
                    {capabilityEffectiveness.find((c) => c.id === qi.capability)?.name}
                  </span>
                ))}
            </div>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);

const QualityDialog = ({
  item,
  onDismiss,
}: {
  item: QualityImpact | null;
  onDismiss: () => void;
}) => {
  const capName = item
    ? capabilityEffectiveness.find((c) => c.id === item.capability)?.name ?? ''
    : '';
  return (
    <Dialog isOpen={item !== null} onDismiss={onDismiss} isDismissable showCloseButton>
      <DialogTitle>{capName} — Quality Impact</DialogTitle>
      <DialogContent>
        {item && (
          <>
            <div className={styles.dialogSection}>
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <MetricItem metric={metric} />
                  {metric.description && (
                    <div className={styles.metricDescription}>{metric.description}</div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.dialogSection}>
              <div className={styles.dialogSectionTitle}>Contributes to</div>
              <div className={styles.dialogChips}>
                {item.contributesTo.map((id) => (
                  <span key={id} className={styles.dialogChip}>
                    {businessOutcomes.find((o) => o.id === id)?.name}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const EffectivenessDialog = ({
  capability,
  onDismiss,
}: {
  capability: CapabilityEffectiveness | null;
  onDismiss: () => void;
}) => (
  <Dialog isOpen={capability !== null} onDismiss={onDismiss} isDismissable showCloseButton>
    <DialogTitle>{capability?.name} — Effectiveness Impact</DialogTitle>
    <DialogContent>
      {capability && (
        <>
          <div className={styles.dialogSection}>
            <Text variant="reference-s" color="secondary" className={styles.dialogQuestion}>
              {capability.question}
            </Text>
          </div>
          <div className={styles.dialogSection}>
            {capability.metrics.map((metric) => (
              <div key={metric.label}>
                <MetricItem metric={metric} />
                {metric.description && (
                  <div className={styles.metricDescription}>{metric.description}</div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.dialogSection}>
            <div className={styles.dialogSectionTitle}>Contributes to</div>
            <div className={styles.dialogChips}>
              {capability.contributesTo.map((id) => {
                const qi = qualityImpact.find((q) => q.id === id);
                if (qi) {
                  const name = capabilityEffectiveness.find((c) => c.id === qi.capability)?.name;
                  return (
                    <span key={id} className={styles.dialogChip}>
                      {name} Quality Impact
                    </span>
                  );
                }
                return (
                  <span key={id} className={styles.dialogChip}>
                    {businessOutcomes.find((o) => o.id === id)?.name}
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);

const DriverDialog = ({
  driver,
  onDismiss,
}: {
  driver: CapabilityDriver | null;
  onDismiss: () => void;
}) => (
  <Dialog isOpen={driver !== null} onDismiss={onDismiss} isDismissable showCloseButton>
    <DialogTitle>{driver?.name}</DialogTitle>
    <DialogContent>
      {driver && (
        <>
          <div className={styles.dialogSection}>
            <Text variant="reference-s" color="secondary">
              {driver.explanation}
            </Text>
          </div>
          <div className={styles.dialogSection}>
            {driver.metrics.map((metric) => (
              <MetricItem key={metric.label} metric={metric} />
            ))}
          </div>
          <div className={styles.dialogSection}>
            <div className={styles.dialogSectionTitle}>Drives</div>
            <div className={styles.dialogChips}>
              <span className={styles.dialogChip}>
                {capabilityEffectiveness.find((c) => c.id === driver.capability)?.name}
              </span>
            </div>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);

/* ── Arrow ── */

const ChainArrow = () => (
  <div className={styles.chainArrow}>
    <div className={styles.arrowLine} />
    
    <div className={styles.arrowHead}>▲</div>
  </div>
);

/* ── Main ── */

export const Dashboard = () => {
  const { setPageTitle } = useContext(PageTitleProvider);
  const [selectedOutcome, setSelectedOutcome] = useState<BusinessOutcome | null>(null);
  const [selectedQuality, setSelectedQuality] = useState<QualityImpact | null>(null);
  const [selectedEffectiveness, setSelectedEffectiveness] = useState<CapabilityEffectiveness | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<CapabilityDriver | null>(null);
  const [driversExpanded, setDriversExpanded] = useState(false);

  useEffect(() => {
    setPageTitle('');
  }, [setPageTitle]);

  return (
    <div className={styles.page}>
      <Heading variant="heading-l" elementType="h1" className={styles.pageTitle}>XDC Impact</Heading>
      {/* Benefits for Philips */}
      <section className={styles.layerSection}>
        <Heading variant="heading-s" elementType="h2">
          Benefits for Philips
        </Heading>
        <div className={styles.outcomesGrid}>
          {businessOutcomes.map((outcome) => (
            <OutcomeCard key={outcome.id} outcome={outcome} onPress={() => setSelectedOutcome(outcome)} />
          ))}
        </div>
      </section>

      <ChainArrow />

      {/* Quality Impact */}
      <section className={styles.layerSection}>
        <Heading variant="heading-s" elementType="h2">
          Quality Impact
        </Heading>
        <div className={styles.effectivenessGrid}>
          {qualityImpact.map((item) => (
            <QualityImpactCard key={item.id} item={item} onPress={() => setSelectedQuality(item)} />
          ))}
        </div>
      </section>

      <ChainArrow />

      {/* Effectiveness Impact */}
      <section className={styles.layerSection}>
        <Heading variant="heading-s" elementType="h2">
          Effectiveness Impact
        </Heading>
        <div className={styles.effectivenessGrid}>
          {capabilityEffectiveness.map((capability) => (
            <EffectivenessCard key={capability.id} capability={capability} onPress={() => setSelectedEffectiveness(capability)} />
          ))}
        </div>
      </section>

      <ChainArrow />

      {/* Impact Drivers */}
      <section className={styles.layerSection}>
        <div className={styles.sectionHeaderClickable} onClick={() => setDriversExpanded((v) => !v)}>
          <Heading variant="heading-s" elementType="h2">
            Impact Drivers {driversExpanded ? '▴' : '▾'}
          </Heading>
        </div>
        {driversExpanded && (
          <div>
            {capabilityEffectiveness.map((capability) => {
              const drivers = capabilityDrivers.filter((d) => d.capability === capability.id);
              if (drivers.length === 0) return null;
              return (
                <div key={capability.id} className={styles.driverGroup}>
                  <Heading variant="heading-s" elementType="h3">
                    {capability.name}
                  </Heading>
                  <div className={styles.driversGrid}>
                    {drivers.map((driver) => (
                      <DriverCard key={driver.id} driver={driver} onPress={() => setSelectedDriver(driver)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Dialogs */}
      <OutcomeDialog outcome={selectedOutcome} onDismiss={() => setSelectedOutcome(null)} />
      <QualityDialog item={selectedQuality} onDismiss={() => setSelectedQuality(null)} />
      <EffectivenessDialog capability={selectedEffectiveness} onDismiss={() => setSelectedEffectiveness(null)} />
      <DriverDialog driver={selectedDriver} onDismiss={() => setSelectedDriver(null)} />
    </div>
  );
};
