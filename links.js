// EDIT THIS FILE to add/change dashboard links.
// department must match one of the IDs in index.html:
// fc,inventory,inbound,outbound,afs,ums, tools, people, tech

const SHEETS = [
  // INVENTORY — JED01 & JED04 Cycle count & PST 
  {
    department:"inventory", group:"Cycle count", type:"TRACKER",
    name:"H Zone Cycle Count August 2026",
    description:"HVC cycle count",
    url:"https://docs.google.com/spreadsheets/d/1Mtcjt2eyF9A9j7ZzbuBc39sa_VmCIhUGehhN2sbJ38c/edit?gid=1485988585#gid=1485988585"
  },
  {
    department:"inventory", group:"Cycle count", type:"TRACKER",
    name:"A01-B Cycle Count July 2026",
    description:"A01-B Cycle count",
    url:"https://docs.google.com/spreadsheets/d/1aitdu4xB3mod52E6YLXM04SLqFTf_4LEN0enPFGvJQo/edit?gid=318659203#gid=318659203"
  },
  {
    department:"inventory", group:"Cycle count", type:"TRACKER",
    name:"A02-A Zone Cycle Count August 2026",
    description:"A02-A Zone Cycle count",
    url:"https://docs.google.com/spreadsheets/d/147ckiMqkfHJOEDPIgacyVj9Dpkr3YmpasHshGOUDnYw/edit?gid=1485988585#gid=1485988585"
  },
  {
    department:"inventory", group:"Cycle count", type:"TRACKER",
    name:"JED04 CC July 2026",
    description:"JED04 Cycle count",
    url:"https://docs.google.com/spreadsheets/d/1BzZ-6bkFAk6KFCuFibTQ2OS4jDbYstJEMgEn5MsbB-4/edit?gid=2124386822#gid=2124386822"
  },
  {
    department:"inventory", group:"Cycle count", type:"TRACKER",
    name:"JED PST Week 33",
    description:"JED PST",
    url:"https://docs.google.com/spreadsheets/d/1PtvFiBo7_HWcBJ25u7Dhf_Yl9ya3AoZLho847QrJBwA/edit?gid=115709664#gid=115709664"
  },
  {
    department:"inventory", group:"Cycle count", type:"TRACKER",
    name:"JED EXP PST Week 33",
    description:"JED EXP PST",
    url:"https://docs.google.com/spreadsheets/d/1yqB-Q0jCz_BxIGwj8BZVsBkX1-fPR4LAgNmS_asnHNM/edit?gid=115709664#gid=115709664"
  },
  
  // INVENTORY — ZONE TRACKING
  {
    department:"inventory", group:"Zone Tracking", type:"TRACKER",
    name:"BT tracking 2026",
    description:"Back transfer analysis",
    url:"https://docs.google.com/spreadsheets/d/1UjlQUcrJpKwB5aLlPIqiSYAHq5DJ8KAX0odghcM6Dnc/edit?gid=0#gid=0"
  },
  {
    department:"inventory", group:"Zone Tracking", type:"TRACKER",
    name:"A00-D Zone Tracking — Nov'25",
    description:"A00-D zone inventory tracking.",
    url:"https://docs.google.com/spreadsheets/d/14PbOI-eLu7EM1FRJ5IhC3UQge2VURLBkrW34dziPymk/edit?gid=1219272969#gid=1219272969"
  },
  {
    department:"inventory", group:"Zone Tracking", type:"TRACKER",
    name:"JED04 HDR <=3 qty single location Oct 2025 ",
    description:"JED04 HDR <=3 qty",
    url:"https://docs.google.com/spreadsheets/d/1MB4UlRIlEqMY9OToS9__TA6E5L8UZEjfemeV3U3YLd8/edit?gid=0#gid=0"
  },
  {
    department:"inventory", group:"Zone Tracking", type:"TRACKER",
    name:"Grocery food items tracking_2026",
    description:"grocery food tracking.",
    url:"https://docs.google.com/spreadsheets/d/1qPp1PQptDKSS43XkQSi9MW5LpQ87bIPHpxNE7Z9-i5Y/edit?gid=335876408#gid=335876408"
  },

  // INVENTORY — TEMPERED GLASS
  {
    department:"inventory", group:"Tempered Glass", type:"DAMAGE",
    name:"Tempered Glass Damage — May 2026",
    description:"Damage tracking and review.",
    url:"https://docs.google.com/spreadsheets/d/1NwQmvbRwv8a20g9oKAl-USpkSunE1lRzrvC_6jymv2M/edit?gid=1219272969#gid=1219272969"
  },
  {
    department:"inventory", group:"Tempered Glass", type:"TRACKER",
    name:"Tempered Glass Other Zone Tracking — May 2026",
    description:"Other-zone tempered glass tracking.",
    url:"https://docs.google.com/spreadsheets/d/1PhAYOD-DlhlLIJuq6jruoT8o19HsYSirqn-kiulJfpY/edit?usp=sharing"
  },
  {
    department:"inventory", group:"Tempered Glass", type:"ANALYSIS",
    name:"Tempered Glass Analysis",
    description:"Analysis and operational review.",
    url:"https://docs.google.com/spreadsheets/d/1E2HrUW5JSJL5sWDvuiFIyGJ8eJNw-V2HqHHL6e8w-14/edit?gid=1432896378#gid=1432896378"
  },
  {
    department:"inventory", group:"DMR Morning call", type:"TRACKER",
    name:"Action_Tracker_KSA INV",
    description:"Action_Tracker_KSA INV Daily tracking",
    url:"https://docs.google.com/spreadsheets/d/1KgIBsqpOC-XfjjKfPE0M5W5ImEXFPFXN8BS6aW5K2h0/edit?gid=1042309636#gid=1042309636"
  },
   {
    department:"inventory", group:"DMR Morning call", type:"TRACKER",
    name:"Daily Morning call",
    description:"Analysis and operational review.",
    url:"https://docs.google.com/spreadsheets/d/1VRHJ_gaSPVo7d_ZS_2bgwVWbyvT3djqSdSh6W0osEIQ/edit?gid=1755592504#gid=1755592504"
     
  },
  {
    department:"inventory", group:"DMR Morning call", type:"TRACKER",
    name:"Last 10 days putaway & JLM trend",
    description:"Putaway & JLM % Analysis operational review.",
    url:"https://docs.google.com/spreadsheets/d/1LzHfuQJR-0R6l5W6M6N2g-CBluwqZ8PMADEpQEoXcIE/edit?gid=713031848#gid=713031848"
     
  },
   {
    department:"inventory", group:"DMR Morning call", type:"TRACKER",
    name:"Overall JLM 2026",
    description:"Overal JLM",
    url:"https://docs.google.com/spreadsheets/d/1icooyNaJQciM1tXZ0O8VN8rYv5BrBSZTMTMSU9vXjsg/edit?gid=0#gid=0"
  },
];



