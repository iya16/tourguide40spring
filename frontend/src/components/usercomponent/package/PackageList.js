import React, { Component } from "react";
import  PackageData  from "./PackageData";
import "./package.css";
import Package from "./Package";


class PackageList extends Component{
    state={
        packages: PackageData
    };
    render(){
        const { packages} = this.state;
      return(
        <section className="packagelist">
            {packages.map(packagesItem =>(
                <Package key={packagesItem.id} {...packagesItem} />
                 
            ))}

        </section>
      )
    }
}
export default PackageList;
// package={packages}