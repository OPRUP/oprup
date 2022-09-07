import { CentralJob } from "../central-jobs/central-job";
export interface JobTitle{
  jobId:string;
  jobTitleName: string;
  description: string;
  deleteFlag: number;
  allCentralJob?: CentralJob[];

}
