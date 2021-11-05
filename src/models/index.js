// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Productivity, Roster, Top3, CostCodeRollup } = initSchema(schema);

export {
  Productivity,
  Roster,
  Top3,
  CostCodeRollup
};