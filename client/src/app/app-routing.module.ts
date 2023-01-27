import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "task", pathMatch: "full" },
    {
        path: "task",
        loadChildren: () =>
            import("./pages/task/task.module").then((m) => m.TaskModule),
    },
    {
        path: "category",
        loadChildren: () =>
            import("./pages/category/category.module").then(
                (m) => m.CategoryModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
