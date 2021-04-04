import {TeamController, TeamControllerOptions} from "./player-controller"
import * as minimist from "minimist"

const parsearParams = (argv)=>{
   const result = minimist(argv)
   return {
      action : result.action,
      params : JSON.parse(result.params)
   }
}

function main(){   
   const controller = new TeamController()
   const params = parsearParams(process.argv.slice(2))
   const result = controller.processOptions(params)
   console.log(result)
}
main()