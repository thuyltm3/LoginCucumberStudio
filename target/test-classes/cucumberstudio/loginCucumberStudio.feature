Feature: Login into page Cucumber Studio

  Scenario Outline: Login success with valid email & valid password
    Given The login screen is displayed on browser
    When The user login with valid <email> and valid <password>
    Then The homepage will be showed
    Examples:
      |email                         |password     |
      |thuy74809@gmail.com           |thuyltm12345 |
      |luuhuyhung19970107@gmail.com  |thuyltm3     |

  Scenario Outline: Login success with invalid email & valid password
    Given The login screen is displayed on browser
    When The user login with invalid <email> and valid <password>
    Then The error <message> is showed
    Examples:
      |email           |password     |message                                                              |
      |thuy@gmail.com  |thuyltm3     |Invalid email or password.                                           |