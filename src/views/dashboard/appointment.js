import React from "react";

import Header from "../../components/Header";

import SchedulerCreation from "../../components/schedulerCreation";
import DashboardLayout from "../../components/DashboardLayout";
import AppointmentCreation from "../../components/appointmentCreation";

const Appointments=()=>{
return(
<>
<DashboardLayout/>
<AppointmentCreation/>

</>
)
}
export default Appointments;