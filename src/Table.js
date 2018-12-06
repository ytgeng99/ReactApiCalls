import React, { Component } from 'react';
class Table extends Component {
    TableHeader = () =>{
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Delete</th>
                </tr>
            </thead>
        )
    }
    TableBody = (props) => {
        const rows = props.characterData.map((row, index) => {
            return(
                <tr key = {index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td><button onClick = {() => props.removeCharacter(index)}>Delete</button></td>
                </tr>
            )
        });

        return(
            <tbody>
                {rows}
            </tbody>
        )
    }
    render () {
        const { characterData, removeCharacter} = this.props;
        return(
            <table>
                <this.TableHeader/>
                <this.TableBody 
                    characterData = {characterData}
                    removeCharacter = {removeCharacter}
                />
            </table>
        )
    }
}
export default Table;