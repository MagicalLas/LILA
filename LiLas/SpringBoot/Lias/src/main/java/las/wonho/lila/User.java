package las.wonho.lila;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "User")
@Getter
@Setter
public class User {
    private @Column(name = "Id")
    String Id;
    private @Column(name = "Password")
    String Password;
    private @Column(name = "Name")
    String Name;
}
