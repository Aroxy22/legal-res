export default function IntakeSummary() {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-textPrimary">
            Your issue at a glance
          </h2>
  
          <p className="mt-6 text-textSecondary">
            This is where the system will summarize the issue
            and explain what this generally involves.
          </p>
  
          <p className="mt-4 text-sm text-textSecondary">
            (We’ll wire real data into this next.)
          </p>
        </div>
      </div>
    );
  }
  