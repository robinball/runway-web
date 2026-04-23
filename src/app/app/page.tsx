export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to Runway. Your cash-flow planning dashboard is coming soon.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Getting started
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li>• Add your income and expense events</li>
          <li>• View your 90-day cash-flow projection</li>
          <li>• Get AI-powered insights about your balance</li>
        </ul>
      </div>
    </div>
  );
}
