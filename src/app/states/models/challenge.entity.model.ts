import { Testcase } from './testcase.model';

export interface ChallengeEntityModel {
  challengeID: string;
  ownerID: string;
  title: string;
  shortDescription: string;
  details: string;
  sampleInput: string;
  sampleOutput: string;
  canViewSolution: boolean;
  testCases: Array<Testcase>;
  history: {};
}
