/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncProductivities = /* GraphQL */ `
  query SyncProductivities(
    $filter: ModelProductivityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        EVENTDTM
        EMPLOYEE_BARCODE
        EMPLOYEE_LOGIN
        FULL_COST_CODE
        COST_CODE_LEVEL_1
        COST_CODE_LEVEL_2
        COST_CODE_LEVEL_3
        COST_CODE_LEVEL_4
        TIME_IN_LOCAL_TIMEZONE
        TIME_OUT_LOCAL_TIMEZONE
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductivity = /* GraphQL */ `
  query GetProductivity($id: ID!) {
    getProductivity(id: $id) {
      id
      EVENTDTM
      EMPLOYEE_BARCODE
      EMPLOYEE_LOGIN
      FULL_COST_CODE
      COST_CODE_LEVEL_1
      COST_CODE_LEVEL_2
      COST_CODE_LEVEL_3
      COST_CODE_LEVEL_4
      TIME_IN_LOCAL_TIMEZONE
      TIME_OUT_LOCAL_TIMEZONE
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listProductivitys = /* GraphQL */ `
  query ListProductivitys(
    $filter: ModelProductivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        EVENTDTM
        EMPLOYEE_BARCODE
        EMPLOYEE_LOGIN
        FULL_COST_CODE
        COST_CODE_LEVEL_1
        COST_CODE_LEVEL_2
        COST_CODE_LEVEL_3
        COST_CODE_LEVEL_4
        TIME_IN_LOCAL_TIMEZONE
        TIME_OUT_LOCAL_TIMEZONE
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRosters = /* GraphQL */ `
  query SyncRosters(
    $filter: ModelRosterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRosters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        EMPLOYEE_LOGIN
        EMPLOYEE_BARCODE
        COST_CENTER
        FCLM_AREA_CODE
        SITE
        TYPE
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRoster = /* GraphQL */ `
  query GetRoster($id: ID!) {
    getRoster(id: $id) {
      id
      EMPLOYEE_LOGIN
      EMPLOYEE_BARCODE
      COST_CENTER
      FCLM_AREA_CODE
      SITE
      TYPE
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRosters = /* GraphQL */ `
  query ListRosters(
    $filter: ModelRosterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRosters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        EMPLOYEE_LOGIN
        EMPLOYEE_BARCODE
        COST_CENTER
        FCLM_AREA_CODE
        SITE
        TYPE
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTop3s = /* GraphQL */ `
  query SyncTop3s(
    $filter: ModelTop3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTop3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FIRST_MOST
        SECOND_MOST
        THIRD_MOST
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTop3 = /* GraphQL */ `
  query GetTop3($id: ID!) {
    getTop3(id: $id) {
      id
      FIRST_MOST
      SECOND_MOST
      THIRD_MOST
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTop3s = /* GraphQL */ `
  query ListTop3s(
    $filter: ModelTop3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTop3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FIRST_MOST
        SECOND_MOST
        THIRD_MOST
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCostCodeRollups = /* GraphQL */ `
  query SyncCostCodeRollups(
    $filter: ModelCostCodeRollupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCostCodeRollups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FULL_COST_CODE
        COST_CODE_LEVEL_1
        COST_CODE_LEVEL_2
        COST_CODE_LEVEL_3
        COST_CODE_LEVEL_4
        COST_CODE_LEVEL_5
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCostCodeRollup = /* GraphQL */ `
  query GetCostCodeRollup($id: ID!) {
    getCostCodeRollup(id: $id) {
      id
      FULL_COST_CODE
      COST_CODE_LEVEL_1
      COST_CODE_LEVEL_2
      COST_CODE_LEVEL_3
      COST_CODE_LEVEL_4
      COST_CODE_LEVEL_5
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCostCodeRollups = /* GraphQL */ `
  query ListCostCodeRollups(
    $filter: ModelCostCodeRollupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCostCodeRollups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FULL_COST_CODE
        COST_CODE_LEVEL_1
        COST_CODE_LEVEL_2
        COST_CODE_LEVEL_3
        COST_CODE_LEVEL_4
        COST_CODE_LEVEL_5
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
