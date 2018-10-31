package las.wonho.lila;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BaseController {
    @RequestMapping(value = "/")
    @ResponseBody
    String test(@RequestParam(value  = "name") String name) {
        return name;
    }
    @RequestMapping(value = "/main")
    public String main(Model m) {

        return "main";
    }
}
