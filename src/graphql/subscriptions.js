/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductivity = /* GraphQL */ `
  subscription OnCreateProductivity($owner: String!) {
    onCreateProductivity(owner: $owner) {
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
export const onUpdateProductivity = /* GraphQL */ `
  subscription OnUpdateProductivity($owner: String!) {
    onUpdateProductivity(owner: $owner) {
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
export const onDeleteProductivity = /* GraphQL */ `
  subscription OnDeleteProductivity($owner: String!) {
    onDeleteProductivity(owner: $owner) {
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
export const onCreateRoster = /* GraphQL */ `
  subscription OnCreateRoster {
    onCreateRoster {
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
export const onUpdateRoster = /* GraphQL */ `
  subscription OnUpdateRoster {
    onUpdateRoster {
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
export const onDeleteRoster = /* GraphQL */ `
  subscription OnDeleteRoster {
    onDeleteRoster {
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
export const onCreateTop3 = /* GraphQL */ `
  subscription OnCreateTop3 {
    onCreateTop3 {
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
export const onUpdateTop3 = /* GraphQL */ `
  subscription OnUpdateTop3 {
    onUpdateTop3 {
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
export const onDeleteTop3 = /* GraphQL */ `
  subscription OnDeleteTop3 {
    onDeleteTop3 {
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
export const onCreateCostCodeRollup = /* GraphQL */ `
  subscription OnCreateCostCodeRollup {
    onCreateCostCodeRollup {
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
export const onUpdateCostCodeRollup = /* GraphQL */ `
  subscription OnUpdateCostCodeRollup {
    onUpdateCostCodeRollup {
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
export const onDeleteCostCodeRollup = /* GraphQL */ `
  subscription OnDeleteCostCodeRollup {
    onDeleteCostCodeRollup {
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
