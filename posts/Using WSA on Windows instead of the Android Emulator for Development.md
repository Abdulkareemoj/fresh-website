---
title: "Exploring WSA with Flutter for Android Development: A Comprehensive Guide"
publishDate: "2020-04-04"

description: "Windows Subsystem for Android (WSA) provides a seamless environment for running Android apps directly on Windows, offering a more efficient and integrated development experience. In this guide, we'll explore how to leverage WSA with Flutter for Android development and provide a step-by-step guide to get started."
image: "an image for the blogs page"
---

When it comes to Android development, emulators have long been the go-to choice for testing and debugging applications. Whether with native applications or Hybrid apps, however with the advent of Windows Subsystem for Android (WSA), developers now have a decent alternative at their disposal. WSA provides a seamless environment for running Android apps directly on Windows, offering a more efficient and integrated development experience. In this article, we'll explore how to leverage WSA with Flutter for Android development, highlighting its benefits and providing a step-by-step guide to get started.

## <a name="Headings"></a>Why WSA with Flutter?

Seamless Integration: WSA integrates seamlessly with Windows, allowing developers to run Android apps directly within their development environment without the need for external emulators.

- Performance: WSA offers improved performance compared to traditional emulators, leveraging the underlying Windows system resources efficiently.
- Debugging Capabilities: With WSA, developers can easily debug their Flutter applications using familiar tools like Android Studio or Visual Studio Code.
- Compatibility: WSA supports a wide range of Android APIs and features, ensuring compatibility with various Flutter plugins and packages.
- Simplified Setup: Setting up WSA for Flutter development is straightforward and requires minimal configuration, making it accessible to developers of all skill levels.

## Getting Started with WSA and Flutter:

### Prerequisites:

- Windows 11 installed on your system.
- Windows Subsystem for Android enabled.
- Flutter SDK installed on your machine.
- A Text Editor or IDE for Flutter development (e.g., Visual Studio Code, Android Studio).

#### Windows 11 install

Im going to assume you have Windows 11 installed on your system. If not, you can follow the official guide to install Windows 11 on your machine. WSA require Windows 11 or later to run, so make sure your system meets the minimum requirements, although there are ways to get it on Windows 10, it's not officially supported.

But just in case you want to try it out on Windows 10, you can follow [this guide](https://github.com/MustardChef/WSABuilds). It also applies for Windows 11 users who cannot install WSA due to regional restrictions, you just dont want to use the amazon appstore method.

#### Enable Windows Subsystem for Android

Open Settings on your Windows machine.
Navigate to Apps > Apps & features > Optional features.
Click on "Add a feature" and select "Windows Subsystem for Android" from the list.
Follow the on-screen instructions to complete the installation.

#### Install Flutter

Download and install the Flutter SDK from the official website (https://flutter.dev/docs/get-started/install).
Add Flutter to your system path to access it from the command line.
Create a New Flutter Project:

Open your preferred terminal or command prompt.
Run the following command to create a new Flutter project:

```bash
flutter create my_flutter_app
## Navigate to the newly created project directory
cd my_flutter_app

```

#### Installing A Text Editor or IDE for Flutter development 
There's two popular options for this, you can either use Visual Studio Code or Android Studio. Both are great options, but Visual Studio Code is more lightweight and easier to set up, while Android Studio is more integrated and tailored specifically for Android development.

Installing a text editor or IDE for Flutter development is a crucial step in setting up your development environment. 
#### Visual Studio Code
Download Visual Studio Code:

Download the official installer at he  Visual Studio Code website at https://code.visualstudio.com/.
Click on the "Download for Windows" button to d
Install Visual Studio Code:

Once the download is complete, locate the downloaded installer file (usually named something like VSCodeSetup.exe) in your downloads folder.
Double-click on the installer file to begin the installation process.
Follow the on-screen instructions provided by the installer.
Choose the destination folder for the installation and any additional options as per your preference.
Click "Install" to begin the installation process.
Open Visual Studio Code:

After the installation is complete, you can launch Visual Studio Code by double-clicking its icon on the desktop or by searching for "Visual Studio Code" in the Start menu.
Install Flutter and Dart Extensions:

Once Visual Studio Code is open, navigate to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X.
In the search bar, type "Flutter" and press Enter.
Look for the "Flutter" extension authored by the Flutter team and click on the "Install" button next to it. This extension provides Flutter-specific functionalities within Visual Studio Code.
Similarly, search for "Dart" in the Extensions view and install the "Dart" extension, which provides support for the Dart programming language used in Flutter development.
Configure Flutter SDK Path:

After installing the Flutter extension, you'll need to specify the path to your Flutter SDK.
Open the Command Palette by pressing Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac).
Type "Flutter: Select Flutter SDK" and press Enter.
Navigate to the folder where you have installed Flutter and select the Flutter SDK directory.
Verify Installation:

To verify that Flutter and Dart extensions are installed correctly, open a new terminal within Visual Studio Code by pressing `Ctrl+Shift+`` (backtick).
Type flutter --version and press Enter to check the Flutter installation.
Similarly, type dart --version and press Enter to verify the Dart installation.
Once you've completed these steps, Visual Studio Code is set up for Flutter development, and you can start creating Flutter projects, writing code, and building apps directly within the IDE.


Certainly! Android Studio is another popular choice for Flutter development, especially for developers who prefer an integrated environment tailored specifically for Android development. Here's how to install Android Studio for Flutter development:

#### Android Studio
Download Android Studio:

Visit the official Android Studio website at https://developer.android.com/studio.
Click on the "Download Android Studio" button.
Install Android Studio:

Once the download is complete, locate the downloaded installer file.
Double-click on the installer file to start the installation process.
Follow the on-screen instructions provided by the installer.
Choose the installation options and components you want to install. Make sure to include Flutter and Dart plugins during installation by checking the respective boxes.
Select the installation location on your system.
Click "Install" to begin the installation process.
Open Android Studio:

After the installation is complete, launch Android Studio by double-clicking its icon on the desktop or by searching for "Android Studio" in the Start menu.
Set up Flutter Plugin:

Once Android Studio is open, go to "Configure" in the top menu, and select "Plugins".
In the Plugins window, click on the "Marketplace" tab.
Search for "Flutter" in the Marketplace search bar.
Click on the "Install" button next to the "Flutter" plugin.
Follow any additional instructions to complete the installation.
Restart Android Studio to activate the Flutter plugin.
Set up Flutter SDK Path:

After installing the Flutter plugin, you need to specify the Flutter SDK path in Android Studio.
Go to "File" > "Settings" (or "Android Studio" > "Preferences" on macOS).
In the Settings/Preferences dialog, navigate to "Languages & Frameworks" > "Flutter".
Click on the "Flutter SDK path" field and browse to the directory where you installed Flutter.
Click "Apply" and then "OK" to save the settings.
Verify Installation:

To verify that Android Studio is set up correctly for Flutter development, open a new terminal within Android Studio.
Type flutter --version and press Enter to check the Flutter installation.
Similarly, type dart --version and press Enter to verify the Dart installation.
Once you've completed these steps, Android Studio is ready for Flutter development, and you can start creating Flutter projects, writing code, and building apps directly within the IDE.


[[Top]](#top)

## <a name="Paragraphs"></a>Paragraphs

Incididunt ex adipisicing ea ullamco consectetur in voluptate proident fugiat tempor deserunt reprehenderit ullamco id dolore laborum. Do laboris laboris minim incididunt qui consectetur exercitation adipisicing dolore et magna consequat magna anim sunt. Officia fugiat Lorem sunt pariatur incididunt Lorem reprehenderit proident irure. Dolore ipsum aliqua mollit ad officia fugiat sit eu aliquip cupidatat ipsum duis laborum laborum fugiat esse. Voluptate anim ex dolore deserunt ea ex eiusmod irure. Occaecat excepteur aliqua exercitation aliquip dolor esse eu eu.

Officia dolore laborum aute incididunt commodo nisi velit est est elit et dolore elit exercitation. Enim aliquip magna id ipsum aliquip consectetur ad nulla quis. Incididunt pariatur dolor consectetur cillum enim velit cupidatat laborum quis ex.

Officia irure in non voluptate adipisicing sit amet tempor duis dolore deserunt enim ut. Reprehenderit incididunt in ad anim et deserunt deserunt Lorem laborum quis. Enim aute anim labore proident laboris voluptate elit excepteur in. Ex labore nulla velit officia ullamco Lorem Lorem id do. Dolore ullamco ipsum magna dolor pariatur voluptate ipsum id occaecat ipsum. Dolore tempor quis duis commodo quis quis enim.

[[Top]](#top)

## <a name="Blockquotes"></a>Blockquotes

Ad nisi laborum aute cupidatat magna deserunt eu id laboris id. Aliquip nulla cupidatat sint ex Lorem mollit laborum dolor amet est ut esse aute. Nostrud ex consequat id incididunt proident ipsum minim duis aliqua ut ex et ad quis. Laborum sint esse cillum anim nulla cillum consectetur aliqua sit. Nisi excepteur cillum labore amet excepteur commodo enim occaecat consequat ipsum proident exercitation duis id in.

> Ipsum et cupidatat mollit exercitation enim duis sunt irure aliqua reprehenderit mollit. Pariatur Lorem pariatur laboris do culpa do elit irure. Eiusmod amet nulla voluptate velit culpa et aliqua ad reprehenderit sit ut.

Labore ea magna Lorem consequat aliquip consectetur cillum duis dolore. Et veniam dolor qui incididunt minim amet laboris sit. Dolore ad esse commodo et dolore amet est velit ut nisi ea. Excepteur ea nulla commodo dolore anim dolore adipisicing eiusmod labore id enim esse quis mollit deserunt est. Minim ea culpa voluptate nostrud commodo proident in duis aliquip minim.

> Qui est sit et reprehenderit aute est esse enim aliqua id aliquip ea anim. Pariatur sint reprehenderit mollit velit voluptate enim consectetur sint enim. Quis exercitation proident elit non id qui culpa dolore esse aliquip consequat.

Ipsum excepteur cupidatat sunt minim ad eiusmod tempor sit.

> Deserunt excepteur adipisicing culpa pariatur cillum laboris ullamco nisi fugiat cillum officia. In cupidatat nulla aliquip tempor ad Lorem Lorem quis voluptate officia consectetur pariatur ex in est duis. Mollit id esse est elit exercitation voluptate nostrud nisi laborum magna dolore dolore tempor in est consectetur.

Adipisicing voluptate ipsum culpa voluptate id aute laboris labore esse fugiat veniam ullamco occaecat do ut. Tempor et esse reprehenderit veniam proident ipsum irure sit ullamco et labore ea excepteur nulla labore ut. Ex aute minim quis tempor in eu id id irure ea nostrud dolor esse.

[[Top]](#top)

## <a name="Lists"></a>Lists

### Ordered List

1. Longan
2. Lychee
3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.
   Deserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.
4. Marionberry
5. Melon
   - Cantaloupe
   - Honeydew
   - Watermelon
6. Miracle fruit
7. Mulberry

### Unordered List

- Olive
- Orange
  - Blood orange
  - Clementine
- Papaya
- Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing.
- Passionfruit

[[Top]](#top)

## <a name="Horizontal"></a>Horizontal rule

In dolore velit aliquip labore mollit minim tempor veniam eu veniam ad in sint aliquip mollit mollit. Ex occaecat non deserunt elit laborum sunt tempor sint consequat culpa culpa qui sit. Irure ad commodo eu voluptate mollit cillum cupidatat veniam proident amet minim reprehenderit.

---

In laboris eiusmod reprehenderit aliquip sit proident occaecat. Non sit labore anim elit veniam Lorem minim commodo eiusmod irure do minim nisi. Dolor amet cillum excepteur consequat sint non sint.

[[Top]](#top)

## <a name="Table"></a>Table

Duis sunt ut pariatur reprehenderit mollit mollit magna dolore in pariatur nulla commodo sit dolor ad fugiat. Laboris amet ea occaecat duis eu enim exercitation deserunt ea laborum occaecat reprehenderit. Et incididunt dolor commodo consequat mollit nisi proident non pariatur in et incididunt id. Eu ut et Lorem ea ex magna minim ipsum ipsum do.

| Table Heading 1 | Table Heading 2 | Center align | Right align | Table Heading 5 |
| :-------------- | :-------------- | :----------: | ----------: | :-------------- |
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |
| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |

Minim id consequat adipisicing cupidatat laborum culpa veniam non consectetur et duis pariatur reprehenderit eu ex consectetur. Sunt nisi qui eiusmod ut cillum laborum Lorem officia aliquip laboris ullamco nostrud laboris non irure laboris. Cillum dolore labore Lorem deserunt mollit voluptate esse incididunt ex dolor.

[[Top]](#top)

## <a name="Code"></a>Code

### Inline code

Ad amet irure est magna id mollit Lorem in do duis enim. Excepteur velit nisi magna ea pariatur pariatur ullamco fugiat deserunt sint non sint. Duis duis est `code in text` velit velit aute culpa ex quis pariatur pariatur laborum aute pariatur duis tempor sunt ad. Irure magna voluptate dolore consectetur consectetur irure esse. Anim magna `<strong>in culpa qui officia</strong>` dolor eiusmod esse amet aute cupidatat aliqua do id voluptate cupidatat reprehenderit amet labore deserunt.

### Highlighted

Et fugiat ad nisi amet magna labore do cillum fugiat occaecat cillum Lorem proident. In sint dolor ullamco ad do adipisicing amet id excepteur Lorem aliquip sit irure veniam laborum duis cillum. Aliqua occaecat minim cillum deserunt magna sunt laboris do do irure ea nostrud consequat ut voluptate ex.

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

Ex amet id ex aliquip id do laborum excepteur exercitation elit sint commodo occaecat nostrud est. Nostrud pariatur esse veniam laborum non sint magna sit laboris minim in id. Aliqua pariatur pariatur excepteur adipisicing irure culpa consequat commodo et ex id ad.

[[Top]](#top)

## <a name="Inline"></a>Inline elements

Sint ea anim ipsum ad commodo cupidatat do **exercitation** incididunt et minim ad labore sunt. Minim deserunt labore laboris velit nulla incididunt ipsum nulla. Ullamco ad laborum ea qui et anim in laboris exercitation tempor sit officia laborum reprehenderit culpa velit quis. **Consequat commodo** reprehenderit duis [irure](#!) esse esse exercitation minim enim Lorem dolore duis irure. Nisi Lorem reprehenderit ea amet excepteur dolor excepteur magna labore proident voluptate ipsum. Reprehenderit ex esse deserunt aliqua ea officia mollit Lorem nulla magna enim. Et ad ipsum labore enim ipsum **cupidatat consequat**. Commodo non ea cupidatat magna deserunt dolore ipsum velit nulla elit veniam nulla eiusmod proident officia.

![Super wide](https://images.unsplash.com/photo-1471128466710-c26ff0d26143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MDc4MTk3Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)

_Proident sit veniam in est proident officia adipisicing_ ea tempor cillum non cillum velit deserunt. Voluptate laborum incididunt sit consectetur Lorem irure incididunt voluptate nostrud. Commodo ut eiusmod tempor cupidatat esse enim minim ex anim consequat. Mollit sint culpa qui laboris quis consectetur ad sint esse. Amet anim anim minim ullamco et duis non irure. Sit tempor adipisicing ea laboris `culpa ex duis sint` anim aute reprehenderit id eu ea. Aute [excepteur proident](#!) Lorem minim adipisicing nostrud mollit ad ut voluptate do nulla esse occaecat aliqua sint anim.

![Not so big](https://placekitten.com/480/400)

Incididunt in culpa cupidatat mollit cillum qui proident sit. In cillum aliquip incididunt voluptate magna amet cupidatat cillum pariatur sint aliqua est _enim **anim** voluptate_. Magna aliquip proident incididunt id duis pariatur eiusmod incididunt commodo culpa dolore sit. Culpa do nostrud elit ad exercitation anim pariatur non minim nisi **adipisicing sunt _officia_**. Do deserunt magna mollit Lorem commodo ipsum do cupidatat mollit enim ut elit veniam ea voluptate.

Reprehenderit non eu quis in ad elit esse qui aute id [incididunt](#!) dolore cillum. Esse laboris consequat dolor anim exercitation tempor aliqua deserunt velit magna laboris. Culpa culpa minim duis amet mollit do quis amet commodo nulla irure.

[[Top]](#top)
