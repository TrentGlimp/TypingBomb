import java.time.LocalTime;

class Main {
  static void SleepFor(int x){
    LocalTime time = LocalTime.now();  
    int secs = time.getSecond();
    while(true) {
      LocalTime currentT = LocalTime.now();
      int currentS = currentT.getSecond();
      if(currentS - secs >= x) {
        break;
      }
    }
        
    }

  
  public static void main(String[] args) {
    while(true) {
      LocalTime time = LocalTime.now();  
      int secs = time.getSecond();
      if(secs % 5 == 0) {
        System.out.println("KABOOM");
        System.out.println("a" / 4);
      } else {
        System.out.println("tick");
      }
      SleepFor(1);
    }
  }
}