// EDIT THIS FILE to add/change dashboard links.
// department must match one of the IDs in index.html:
// fc, outbound, inbound, afs, inventory, ums, tools, people, tech

const SHEETS = [
  // INVENTORY — STOCK CONSOLIDATION
  {
    department:"inventory", group:"Stock Consolidation", type:"TRACKER",
    name:"JED01  Deadwood,High selling",
    description:"JED01  Deadwood,High selling, Slow moving stock analysis.",
    url:"https://docs.google.com/spreadsheets/d/1CDcfXAw1g_zqTeUV57DkRooPtbMyOy6OOnb87yPqCTU/edit?gid=0#gid=0"
  },
  {
    department:"inventory", group:"Stock Consolidation", type:"TRACKER",
    name:"JED04 Barcode Stock Consolidation — July 2026 Phase 01",
    description:"Barcode-level stock consolidation tracker.",
    url:"https://docs.google.com/spreadsheets/d/1G8xzf0e4bPa5sE92m4Zo82mnDiOHMcWAZk1PXA72zHc/edit?gid=0#gid=0"
  },
  {
    department:"inventory", group:"Stock Consolidation", type:"TRACKER",
    name:"JED04 Barcode Stock Consolidation — October 2025 Phase 02",
    description:"Barcode-level consolidation and clearance tracking.",
    url:"https://docs.google.com/spreadsheets/d/1O-0nBfMW73H5XGHZWhOErwxw1KbsMreMqrLPMuTe1mw/edit?usp=sharing"
  },
  {
    department:"inventory", group:"Stock Consolidation", type:"TRACKER",
    name:"Footwear Stock Consolidation — June 2026",
    description:"Footwear stock consolidation tracker.",
    url:"https://docs.google.com/spreadsheets/d/19P_7fZ_DP6QewRpp2QOwYvBn2aOVDchC5-W3HcAcQ10/edit?gid=2037352706#gid=2037352706"
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
    department:"inventory", group:"DMR Morning call", type:"ANALYSIS",
    name:"Daily Morning call",
    description:"Analysis and operational review.",
    url:"https://docs.google.com/spreadsheets/d/1VRHJ_gaSPVo7d_ZS_2bgwVWbyvT3djqSdSh6W0osEIQ/edit?gid=1755592504#gid=1755592504"
  }
];



