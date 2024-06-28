// export type jobroleItem = {
//     jobrole: string,
// }

// export type jobskillsItem = {
//     jobskills: string,
// }

export type postedHistoryItem = {
    posted: number,
    Date: string,
}

export type appliedHistoryItem = {
    apply: number,
    Date: string,
}

export type viewsHistoryItem = {
    views: number,
    Date: string,
}

export type User = {
    email: string,
}


export type Jobs = {
    _id?: string,
    url: string,
    jobName: string,
    jobCompany: string,
    jobPlace: string,
    jobExperience: string,
    jobSalary: string,
    jobPosted: string,
    jobViews: string,
    jobApplied: string,
    jobDescription: string,
    jobType: string,
    jobIndustry: string,
    jobFunction: string,
    jobRole: string[] | [],
    jobSkillsets: string[] | [],
    jobCompanyUrl: string,
    jobSource: string,
    jobApply: string,
    jobQuickApply: string,
    jobPostedValue: number,
    jobAppliedValue: number,
    jobViewsValue: number,
    postedHistory: postedHistoryItem[] | [],
    appliedHistory: appliedHistoryItem[] | [],
    viewsHistory: viewsHistoryItem[] | [],
    users?: User[],
    timestamps: string,
}

export type EmailJobInfo = {
    jobName: string;
    url: string;
};

export type NotificationType =
| "WELCOME";

export type EmailContent = {
    subject: string;
    body: string;
};