import { Outlet } from 'react-router';
import { AppSidebar } from '../components/AppSidebar';
import { AppNavbar } from '../components/AppNavbar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background-gradient-start to-background-gradient-end">
      <AppSidebar />
      <div className="flex-1 ml-64">
        <AppNavbar />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
