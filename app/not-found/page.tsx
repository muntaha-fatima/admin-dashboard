import Client404 from "@/components/client404";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
         <Client404 />
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
