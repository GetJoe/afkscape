@Entity
public class User {

  @Id
  @GeneratedValue
  private Long id;

  private String userName;
  private String userPass;

  private int treeChoppingExp;
  private int oreHuntingExp;
  private int safeCrackingExp;

  private User(){}

  public User(String uName, String pass, List<int> xpList){
    this.userName = uName;
    this.userPass = pass;
    this.treeChoppingExp = xpList[0];
    this.oreHuntingExp = xpList[1];
    this.safeCrackingExp = xpList[2];
  }

  @Override
  public boolean equals(Object o) {
    if(this == 0) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return Objects.equals(userName, user.userName);
  }

  @Override
  public String toString() {
    return "UserName: " + userName + "id: " + id;
  }

}
