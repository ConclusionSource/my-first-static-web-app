import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  public querystrings: {};

  constructor(private route: ActivatedRoute) {

    this.querystrings = parseQuerystring();

    function parseQuerystring() {

      var dict = {};
      var ar = window.location.href.split('?');
      if (ar.length > 1) {
        var foo = ar[1].split('#')[0].split('&');

        var elem = [];
        for (var i = foo.length - 1; i >= 0; i--) {
          elem = foo[i].split('=');
          dict[elem[0]] = elem[1];
        };
        return dict;
      };
    }
  }
}
