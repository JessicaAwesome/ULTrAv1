/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProductivity = /* GraphQL */ `
  mutation CreateProductivity(
    $input: CreateProductivityInput!
    $condition: ModelProductivityConditionInput
  ) {
    createProductivity(input: $input, condition: $condition) {
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
export const updateProductivity = /* GraphQL */ `
  mutation UpdateProductivity(
    $input: UpdateProductivityInput!
    $condition: ModelProductivityConditionInput
  ) {
    updateProductivity(input: $input, condition: $condition) {
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
export const deleteProductivity = /* GraphQL */ `
  mutation DeleteProductivity(
    $input: DeleteProductivityInput!
    $condition: ModelProductivityConditionInput
  ) {
    deleteProductivity(input: $input, condition: $condition) {
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
export const createRoster = /* GraphQL */ `
  mutation CreateRoster(
    $input: CreateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    createRoster(input: $input, condition: $condition) {
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
export const updateRoster = /* GraphQL */ `
  mutation UpdateRoster(
    $input: UpdateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    updateRoster(input: $input, condition: $condition) {
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
export const deleteRoster = /* GraphQL */ `
  mutation DeleteRoster(
    $input: DeleteRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    deleteRoster(input: $input, condition: $condition) {
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
export const createTop3 = /* GraphQL */ `
  mutation CreateTop3(
    $input: CreateTop3Input!
    $condition: ModelTop3ConditionInput
  ) {
    createTop3(input: $input, condition: $condition) {
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
export const updateTop3 = /* GraphQL */ `
  mutation UpdateTop3(
    $input: UpdateTop3Input!
    $condition: ModelTop3ConditionInput
  ) {
    updateTop3(input: $input, condition: $condition) {
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
export const deleteTop3 = /* GraphQL */ `
  mutation DeleteTop3(
    $input: DeleteTop3Input!
    $condition: ModelTop3ConditionInput
  ) {
    deleteTop3(input: $input, condition: $condition) {
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
export const createCostCodeRollup = /* GraphQL */ `
  mutation CreateCostCodeRollup(
    $input: CreateCostCodeRollupInput!
    $condition: ModelCostCodeRollupConditionInput
  ) {
    createCostCodeRollup(input: $input, condition: $condition) {
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
export const updateCostCodeRollup = /* GraphQL */ `
  mutation UpdateCostCodeRollup(
    $input: UpdateCostCodeRollupInput!
    $condition: ModelCostCodeRollupConditionInput
  ) {
    updateCostCodeRollup(input: $input, condition: $condition) {
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
export const deleteCostCodeRollup = /* GraphQL */ `
  mutation DeleteCostCodeRollup(
    $input: DeleteCostCodeRollupInput!
    $condition: ModelCostCodeRollupConditionInput
  ) {
    deleteCostCodeRollup(input: $input, condition: $condition) {
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
