import { Route, Routes } from "react-router";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import MyPlanPage from "../pages/MyPlanPage";
import RouterSettingPage from "../pages/RouterSettingPage";
import BillsPaymentPage from "../pages/BillsPaymentPage";
import SupportPage from "../pages/Support-Page/SupportPage";
import ReferPage from "../pages/ReferPage";
import Benefits from "../pages/Benefits";
import OfferPage from "../pages/OfferPage";
import LocationShiftPage from "../pages/Support-Page/LocationShiftPage";
import ProfilePage from "../pages/ProfilePage";
import NewConnectionPage from "../pages/Support-Page/NewConnectionPage";
import ReportProblemPage from "../pages/Support-Page/ReportProblemPage";
import EmployeeVerificationPage from "../pages/EmployeeVerificationPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import NotificationPage from "../pages/Notification-Page/NotificationPage";
import NotificationSettingPage from "../pages/Notification-Page/NotificationSettingPage";
import DiagnosticPage from "../pages/Diagnostic-Page/DiagnosticPage";
import NoInternetPage from "../pages/Diagnostic-Page/NoInternetPage";
import SlowSpeedPage from "../pages/Diagnostic-Page/SlowSpeedPage";
import AccountPage from "../pages/Diagnostic-Page/AccountPage";
import NetTVStatusPage from "../pages/Diagnostic-Page/NetTVStatusPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public route */}
      <Route path="/login" element={<LoginPage />}></Route>

      {/* protected route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />}></Route>

          <Route path="profile" element={<ProfilePage />} />
          <Route
            path="employee-verification"
            element={<EmployeeVerificationPage />}
          ></Route>
          <Route
            path="change-password"
            element={<ChangePasswordPage />}
          ></Route>

          <Route path="refer" element={<ReferPage />}></Route>
          <Route path="my-plan" element={<MyPlanPage />} />
          <Route path="router-settings" element={<RouterSettingPage />} />
          <Route path="bills-and-payments" element={<BillsPaymentPage />} />

          <Route path="benefits" element={<Benefits />}></Route>
          <Route path="offers" element={<OfferPage />}></Route>

          {/* profile */}

          {/* notification */}
          <Route path="notification">
            <Route index element={<NotificationPage />}></Route>
            <Route
              path="settings"
              element={<NotificationSettingPage />}
            ></Route>
          </Route>

          {/* support */}
          <Route path="support">
            <Route index element={<SupportPage />}></Route>
            <Route path="location-shift" element={<LocationShiftPage />} />
            <Route path="new-connection" element={<NewConnectionPage />} />
            <Route path="report-problem" element={<ReportProblemPage />} />
          </Route>

          <Route path="diagnostic">
            <Route index element={<DiagnosticPage />}></Route>
            <Route path="no-internet" element={<NoInternetPage />}></Route>
            <Route path="slow-speed" element={<SlowSpeedPage />}></Route>
            <Route path="account" element={<AccountPage />}></Route>
            <Route path="nettv-status" element={<NetTVStatusPage />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
