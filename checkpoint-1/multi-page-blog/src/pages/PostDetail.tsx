import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  return (
    <div className="mt-8 ">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Post Detail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Post Detail of post ID: <span className="font-mono">{postId}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
