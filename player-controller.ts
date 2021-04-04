import {Team, Player} from "./models"

class TeamControllerOptions{
    action : "save" | "get"
    params: Player
}

class TeamController{
    team : Team
    constructor(){
        this.team = new Team()
        this.team.loadBD()
    }
    processOptions(options: TeamControllerOptions){
        let result;
        if(options.action == "get" && options.params.number){
            result = this.team.getByNumber(options.params.number)
        }else if (options.action == "get" && options.params.position){
            result = this.team.getByPosition(options.params.position)
        }else if(options.action == "get" && options.params.name){
            result = this.team.getByName(options.params.name)
        }else if(options.action == "get"){
            result = this.team.getAll()
        } else if (options.action == "save" && options.params){
            this.team.push(options.params);
            this.team.saveBD()
        }
        return result
    }
}

export { TeamController, TeamControllerOptions}