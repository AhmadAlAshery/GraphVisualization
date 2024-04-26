import React from "react";
import Graph from "react-vis-network-graph";
import graph from "./data0";

export default function Graphview0() {
    const options = {
        layout: {
            hierarchical: false,
        },
        // edges: {
        //     color: "#000000",
        // },
        interaction: {
            hover: true, // Enable hover events
        },
        height: "500px",
        physics: {
            enabled: true,
            // barnesHut: {
            //     // gravitationalConstant: -8000,
            //     // centralGravity: 0.1,
            //     springLength: 50, // Adjust spring length to spread out nodes
            //     springConstant: 0.05, // Adjust spring constant for force between nodes
            //     damping: 0.09,
            //     avoidOverlap: 0.5,
            // },
            // maxVelocity: 50,
            // minVelocity: 0.1,
            // solver: "barnesHut",
        },
        // edges: {
        //     //     //     // width: 1, // Set initial edge width to 0
        //     //     //     scaling: {
        //     //     //         min: 1, // Minimum edge width
        //     //     //         max: 10, // Maximum edge width
        //     //     //     },
        //     // smooth: {
        //     //     type: "curvedCW",
        //     // },
        // },
    };

    // const events = {
    //     select: function (event) {
    //         var { nodes, edges } = event;
    //     },
    // };
    return (
        <div>
            <Graph
                graph={graph}
                options={options}
                // events={events}
                // getNetwork={(network) => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
                // }}
            />
        </div>
    );
}
