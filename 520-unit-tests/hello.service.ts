import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  calculateHello(who: string) {
    return 'Hello, ' + who + '!';
  }

}
