import AddABlog from "@/app/components/AddaBlog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Blogs() {
  const data = [
    {
      id: 1,
      titile: "Blog 01",
      subTitle: "Life Story",
      arthour: "Kanishka Pasindu",
    },
  ];
  return (
    <div>
      <AddABlog />
      <div className="mt-15 ">
        {data.map((e) => {
          return (
            <div key={e.id}>
              <Card className="w-[350px]" key={e.id}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {e.titile}
                  </CardTitle>
                  <CardDescription className="text-md font-semibold">
                    {e.subTitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{e.arthour}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {/* <Link href={`/Blogs/${e.id}`}> */}
                  <Button className="w-full cursor-pointer">See More</Button>
                  {/* </Link> */}
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
