import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Productivity {
  readonly id: string;
  readonly EVENTDTM: string;
  readonly EMPLOYEE_BARCODE?: string;
  readonly EMPLOYEE_LOGIN?: string;
  readonly FULL_COST_CODE: string;
  readonly COST_CODE_LEVEL_1?: string;
  readonly COST_CODE_LEVEL_2?: string;
  readonly COST_CODE_LEVEL_3?: string;
  readonly COST_CODE_LEVEL_4?: string;
  readonly TIME_IN_LOCAL_TIMEZONE?: string;
  readonly TIME_OUT_LOCAL_TIMEZONE?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Productivity>);
  static copyOf(source: Productivity, mutator: (draft: MutableModel<Productivity>) => MutableModel<Productivity> | void): Productivity;
}

export declare class Roster {
  readonly id: string;
  readonly EMPLOYEE_LOGIN: string;
  readonly EMPLOYEE_BARCODE: string;
  readonly COST_CENTER: string;
  readonly FCLM_AREA_CODE: string;
  readonly SITE: string;
  readonly TYPE: string;
  constructor(init: ModelInit<Roster>);
  static copyOf(source: Roster, mutator: (draft: MutableModel<Roster>) => MutableModel<Roster> | void): Roster;
}

export declare class Top3 {
  readonly id: string;
  readonly FIRST_MOST: string;
  readonly SECOND_MOST: string;
  readonly THIRD_MOST: string;
  constructor(init: ModelInit<Top3>);
  static copyOf(source: Top3, mutator: (draft: MutableModel<Top3>) => MutableModel<Top3> | void): Top3;
}

export declare class CostCodeRollup {
  readonly id: string;
  readonly FULL_COST_CODE: string;
  readonly COST_CODE_LEVEL_1: string;
  readonly COST_CODE_LEVEL_2: string;
  readonly COST_CODE_LEVEL_3?: string;
  readonly COST_CODE_LEVEL_4?: string;
  readonly COST_CODE_LEVEL_5?: string;
  constructor(init: ModelInit<CostCodeRollup>);
  static copyOf(source: CostCodeRollup, mutator: (draft: MutableModel<CostCodeRollup>) => MutableModel<CostCodeRollup> | void): CostCodeRollup;
}