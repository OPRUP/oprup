import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { CoaService } from '../coa.service';
interface FoodNodeFlat {
  name: string;
  Code: number;
  parentCode: number|null;
  children?: FoodNodeFlat[];
  id:number;
 }

 /** Flat node with expandable and level information */
 interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
 }

@Component({
  selector: 'app-coa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.scss']
})
export class CoaComponent implements OnInit {
  TREE_DATA: FoodNodeFlat[] = [

   ]
  private _transformer = (node: FoodNodeFlat, level: number) => {
    return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: level,
    };
    }
   treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);
   treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);
   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
   constructor(private coaService:CoaService, private router: Router ,) {
    //this.dataSource.data = TREE_DATA;
    }
   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
   ngOnInit() {
    this.dataSource.data =this.treeConstruct(this.TREE_DATA);
    this.getTree()


  }
  //constructTree recursively iterates through the tree to create nested tree structure.
  //We only need Id and parentId Columns in the flat data to construct this tree properly.
  treeConstruct(treeData) {
    let constructedTree = [];
    for (let i of treeData) {
      let treeObj = i;
      let assigned = false;
      this.constructTree(constructedTree, treeObj, assigned)
    }
    return constructedTree;
  }
constructTree(constructedTree, treeObj, assigned) {
if (treeObj.parentCode == 0) {
      treeObj.children = [];
      constructedTree.push(treeObj);
      return true;
    } else if (treeObj.parentCode == constructedTree.Code) {
      treeObj.children = [];
      constructedTree.children.push(treeObj);
      return true;
    }
    else {
      if (constructedTree.children != undefined) {
        for (let index = 0; index < constructedTree.children.length; index++) {
          let constructedObj = constructedTree.children[index];
          if (assigned == false) {
            assigned = this.constructTree(constructedObj, treeObj, assigned);
          }
        }
      } else {
        for (let index = 0; index < constructedTree.length; index++) {
          let constructedObj = constructedTree[index];
          if (assigned == false) {
            assigned = this.constructTree(constructedObj, treeObj, assigned);
          }
        }
      }
      return false;
    }
  }
  displayedColumns: string[] = ['code','name', 'count'];

  getTree(){
this.coaService.getCoa().subscribe((response)=>{
  // accountCode: "1"
  // accountDescription: null
  // accountId: 1
  // accountName: "asset"
  // accountType: "main"
  // deleteFlag: 1
  // parentAccount: null
  response.forEach((element)=>{
    this.TREE_DATA.push({ name: element.accountCode+'-'+element.accountName,Code: element.accountCode, parentCode:element.parentAccount,id:element.accountId })
  })
  this.dataSource.data =this.treeConstruct(this.TREE_DATA);

})
  }
  filterData($event: any){
    this.TREE_DATA.filter = $event.target.value;
  }



  public onEditAccountById (node){
node=node.name.slice(0,node.name.indexOf('-'))
this.coaService.getAccountByCode(node).subscribe((data)=>{
  console.log(data);
  this.router.navigate(['/finance/coa/edit-coa', data[0].accountId])
})



    // dataSource._data._value.forEach((element)=>{

    //  })
  }
  public onPrintAccountById (node){
    node=node.name.slice(0,node.name.indexOf('-'))
    this.coaService.getAccountByCode(node).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/finance/coa/print-coa', data[0].accountId])
    })



        // dataSource._data._value.forEach((element)=>{

        //  })
      }
}
