export default function SectionContainer({
  children,
  title,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="flex size-full flex-col gap-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </section>
  );
}
