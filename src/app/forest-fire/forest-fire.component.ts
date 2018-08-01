import { Component, OnInit } from "@angular/core";
import { initDomAdapter } from "../../../node_modules/@angular/platform-browser/src/browser";

@Component({
  selector: "app-forest-fire",
  templateUrl: "./forest-fire.component.html",
  styleUrls: ["./forest-fire.component.css"]
})
export class ForestFireComponent implements OnInit {
  public button: boolean = false;
  public started: boolean = false;
  public map: number[][] = [];
  public x: number = 50;
  public y: number = 50;
  public interval: number = 1000; //interval between two steps in millisecond

  constructor() {}

  ngOnInit() {}

  private getRandom(): number {
    return Math.random();
  }

  public getState(i: number) {
    switch (i) {
      case 0:
        return "ground";
      case 1:
        return "tree";
      case 2:
        return "fire";
      case 3:
        return "burned";
    }
  }

  private init() {
    this.map = [];
    let frame;
    for (let i = 0; i < this.y; i++) {
      this.map.push([]);
      for (let j = 0; j < this.x; j++) {
        if (this.getRandom() > 0.9) {
          frame = 1;
        }
        else {
          frame = 0;
        }
        this.map[i].push(frame);
      }
    }
  }

  public startStop() {
    if (this.button) {
      this.init();
      this.started = true;
    }
  }

  public toggle() {
    this.button = !this.button;
    if (!this.button) {
      this.started = false;
    }
  }
}