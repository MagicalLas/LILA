package las.wonho.lila;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BaseController {
    
    @RequestMapping(value = "/")
    public @ResponseBody
    String test(){
        return "Wonho";
    }
}
