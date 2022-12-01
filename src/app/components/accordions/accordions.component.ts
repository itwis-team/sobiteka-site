import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})

export class AccordionsComponent implements OnInit {

    ngOnInit(): void {
        
    }

    activeIdx = null

    setActive = function(idx: number) {

        if(idx == this.activeIdx) {
            this.activeIdx = null
        }
        this.activeIdx = idx

        console.log(this.activeIdx);

    }

    accordions = [
        {
            title: 'First Ac',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
            title: 'Second Ac',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }
    ]
 
}
