const INGESTION_ENDPOINTS: {[value: string]: { text: string; extraParam: string | null } }={
  Select: { text: 'Select', extraParam: 'no' },
  AWSS3: { text: 'AWS S3', extraParam: 'no' },
  AzureBLOB: { text: 'Azure Blob Storage', extraParam: 'no' },
  AWSAthena: { text: 'Aws Athena DB', extraParam: 'no' },
  JDBC: { text: 'JDBC', extraParam: 'no' },
  KAFKA: { text: 'Kafka', extraParam: 'no' },
  REDIS: { text: 'Redis DB', extraParam: 'no' },
  ELASTISEARCH: { text: 'Elastisearch', extraParam: 'no' },
  OTHER: { text: 'Other', extraParam: 'no' }
};

export {INGESTION_ENDPOINTS};