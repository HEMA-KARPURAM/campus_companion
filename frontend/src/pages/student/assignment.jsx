import DashboardShell from "../../components/layout/DashboardShell";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { MOCK_ASSIGNMENTS } from "../../lib/mock-data";
// import { Button } from "../../components/ui/button";
import { Upload, FileText, Clock, CheckCircle } from "lucide-react";

export default function StudentAssignments() {
  return (
    <DashboardShell role="student">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Assignments</h2>
          <p className="text-muted-foreground">
            Track and submit your coursework
          </p>
        </div>

        <div className="grid gap-4">
          {MOCK_ASSIGNMENTS.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <CardTitle>{assignment.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <FileText className="inline w-4 h-4 mr-1" />
                    {assignment.subject}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Due: {assignment.dueDate}
                  </p>

                  <p className="text-sm">
                    Total Marks: <strong>{assignment.totalMarks}</strong>
                  </p>
                </div>

                <div>
                  {assignment.status === "pending" && (
                    <Button>
                      <Upload className="w-4 h-4 mr-2" />
                      Submit
                    </Button>
                  )}

                  {assignment.status === "submitted" && (
                    <Button variant="outline" disabled>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submitted
                    </Button>
                  )}

                  {assignment.status === "graded" && (
                    <div className="px-4 py-2 border rounded-lg text-center bg-green-50 text-green-700">
                      Grade: <strong>{assignment.grade}</strong>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
