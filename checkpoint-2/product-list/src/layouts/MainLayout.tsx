const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-7xl p-0 m-0 mx-auto relative">{children}</div>
  );
};

export default MainLayout;
