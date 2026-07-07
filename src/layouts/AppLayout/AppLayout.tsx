type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default AppLayout;