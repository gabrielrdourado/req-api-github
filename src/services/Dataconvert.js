import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function Dataconvert(data){
    return(format(parseISO(data), 'dd/MM/yyyy', {locale: ptBR}))
}