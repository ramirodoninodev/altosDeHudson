import * as jsonfile from "jsonfile"

const baseData = "./base-data.json"

class Player {
    name : string
    number : number
    position: string
    constructor(name,number,pos){
        this.name = name
        this.number = number
        this.position = pos
    }
}

class Team {
    team : Player[] = []
    loadBD(){
        const json = jsonfile.readFileSync(baseData)
        this.team = json
    };
    saveBD(){
        jsonfile.writeFileSync(baseData,this.team)
    }
    push(player:Player){
       this.team.push(player)
    };
    getAll(){
    return this.team    
    };
    getByName(name:string){
        const team = this.team;
        const findPlayer = team.find((player)=>{
            if(player.name.includes(name)){
                return player
            }
        })
        return findPlayer
    };
    getByPosition(pos:string){
        const team = this.team;
        const findPlayers = team.filter((player)=>{
            if(player.position == pos){
                return player
            }
        })
        return findPlayers
    };
    getByNumber(number:number){
        const team = this.team;
        const findPlayer = team.find((player)=>{
         if(player.number == number){
             return player
         }
        })
        return findPlayer
    };
}

export {Player, Team}