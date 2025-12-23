import { Route } from "react-router-dom"
import ManagerDashboardLayout from "./ManagerDashboardLayout"
import { Overview } from "./Overview"
import { Team } from "./Team"
import { Project } from "./Project"

export const ManagerRoutes = (
  <Route path="/manager" element={<ManagerDashboardLayout />}>
    <Route path="overview" element={<Overview />} />
    <Route path="team" element={<Team />} />
    <Route path="projects" element={<Project />} />
  </Route>
)
