import { Component } from "@angular/core";

@Component({
    selector: "app-main",
    template: "<h1>Hello Angular, {{title}}</h1>"
})
export class AppComponent{
    title: string = "body!";
}