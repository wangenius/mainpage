"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4121],{43559:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=a(74848),i=a(28453);const s={title:"variable",sidebar_position:1,slug:"variable"},l="variable",r={id:"lang/cpp/data_types/variables",title:"variable",description:"variable",source:"@site/docs/lang/cpp/data_types/variables.mdx",sourceDirName:"lang/cpp/data_types",slug:"/lang/cpp/data_types/variable",permalink:"/docs/lang/cpp/data_types/variable",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/data_types/variables.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"variable",sidebar_position:1,slug:"variable"},sidebar:"cpp",previous:{title:"datatypes",permalink:"/docs/lang/cpp/data_types/"},next:{title:"user defined types",permalink:"/docs/lang/cpp/data_types/user_defined_types"}},c={},o=[{value:"variable",id:"variable-1",level:2},{value:"Scope of Variables",id:"scope-of-variables",level:2},{value:"local variables",id:"local-variables",level:3},{value:"global variables",id:"global-variables",level:3},{value:"Storage Classes",id:"storage-classes",level:2},{value:"auto",id:"auto",level:3},{value:"extern Storage Class",id:"extern-storage-class",level:3},{value:"static",id:"static",level:3},{value:"static variables",id:"static-variables",level:4},{value:"Static Members of Class",id:"static-members-of-class",level:4},{value:"register",id:"register",level:3},{value:"mutable",id:"mutable",level:3}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"variable",children:"variable"}),"\n",(0,t.jsx)(n.h2,{id:"variable-1",children:"variable"}),"\n",(0,t.jsx)(n.p,{children:"There are three types of variables based on the scope of variables in C++"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Local Variables: Local Variables: A variable defined within a block or method or constructor is called a local variable."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["These variables are created when entered into the block or the function is called and destroyed after exiting from the block or when the call returns from the function.\n",(0,t.jsx)("br",{})," The scope of these variables exists only within the block in which the variable is declared. i.e. we can access this variable only within that block.\n",(0,t.jsx)("br",{})," Initialization of Local Variable is Mandatory."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Instance Variables: Instance variables are non-static variables and are declared in a class outside any method, constructor, or block."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"As instance variables are declared in a class, these variables are created when an object of the class is created and destroyed when the object is destroyed.\nUnlike local variables, we may use access specifiers for instance variables. If we do not specify any access specifier then the default access specifier will be used.\nInitialization of Instance Variable is not Mandatory.\nInstance Variable can be accessed only by creating objects."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Static Variables: Static variables are also known as Class variables."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"These variables are declared similarly as instance variables, the difference is that static variables are declared using the static keyword within a class outside any method constructor or block.\nUnlike instance variables, we can only have one copy of a static variable per class irrespective of how many objects we create.\nStatic variables are created at the start of program execution and destroyed automatically when execution ends.\nInitialization of Static Variable is not Mandatory. Its default value is 0\nIf we access the static variable like the Instance variable (through an object), the compiler will show the warning message and it won\u2019t halt the program. The compiler will replace the object name with the class name automatically.\nIf we access the static variable without the class name, the Compiler will automatically append the class name."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Example\n{\n    static int a; // static variable\n    int b;        // instance variable\n    public:\n    func(){\n        int c; // local variable\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"difference between instance variables and static variables",type:"success",children:[(0,t.jsx)(n.p,{children:"Each object will have its own copy of the instance variable whereas We can only have one copy of a static variable per class irrespective of how many objects we create."}),(0,t.jsx)(n.p,{children:"Changes made in an instance variable using one object will not be reflected in other objects as each object has its own copy of the instance variable. In the case of static, changes will be reflected in other objects as static variables are common to all objects of a class."}),(0,t.jsx)(n.p,{children:"We can access instance variables through object references and Static Variables can be accessed directly using the class name."})]}),"\n",(0,t.jsx)(n.h2,{id:"scope-of-variables",children:"Scope of Variables"}),"\n",(0,t.jsx)(n.p,{children:"In general, the scope is defined as the extent up to which something can be worked with. In programming also the scope of a variable is defined as the extent of the program code within which the variable can be accessed or declared or worked with. There are mainly two types of variable scopes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Local Variables"}),"\n",(0,t.jsx)(n.li,{children:"Global Variables"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"int global_variable = 3;\n\nint main() {\n    int local_variable = 4;\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"local-variables",children:"local variables"}),"\n",(0,t.jsx)(n.p,{children:"Variables defined within a function or block are said to be local to those functions."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Anything between ",(0,t.jsx)(n.code,{children:"{"})," and ",(0,t.jsx)(n.code,{children:"}"})," is said to inside a block."]}),"\n",(0,t.jsx)(n.li,{children:"Local variables do not exist outside the block in which they are declared, i.e. they can not be accessed or used outside that block."}),"\n",(0,t.jsx)(n.li,{children:"Declaring local variables: Local variables are declared inside a block."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"global-variables",children:"global variables"}),"\n",(0,t.jsx)(n.p,{children:"As the name suggests, Global Variables can be accessed from any part of the program."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"They are available through out the life time of a program."}),"\n",(0,t.jsx)(n.li,{children:"They are declared at the top of the program outside all of the functions or blocks."}),"\n",(0,t.jsx)(n.li,{children:"Declaring global variables: Global variables are usually declared outside of all of the functions and blocks, at the top of the program. They can be accessed from any portion of the program."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// C++ program to show that we can access a global  \n// variable using scope resolution operator :: when   \n// there is a local variable with same name  \n#include<iostream>  \nusing namespace std; \n   \n// Global x   \nint x = 0;   \n    \nint main() \n{ \n  // Local x     \n  int x = 10;  \n  cout << "Value of global x is " << ::x; \n  cout<< "\\nValue of local x is " << x;   \n  return 0; \n} \n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="output"',children:"Value of global x is 0\nValue of local x is 10\n"})}),"\n",(0,t.jsx)(n.h2,{id:"storage-classes",children:"Storage Classes"}),"\n",(0,t.jsx)(n.p,{children:"C++ Storage Classes are used to describe the characteristics of a variable/function. It determines the lifetime, visibility, default value, and storage location which helps us to trace the existence of a particular variable during the runtime of a program. Storage class specifiers are used to specify the storage class for a variable."}),"\n",(0,t.jsx)(n.p,{children:"C++ uses 6 storage classes, which are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"auto Storage Class"}),"\n",(0,t.jsx)(n.li,{children:"register Storage Class"}),"\n",(0,t.jsx)(n.li,{children:"extern Storage Class"}),"\n",(0,t.jsx)(n.li,{children:"static Storage Class"}),"\n",(0,t.jsx)(n.li,{children:"mutable Storage Class"}),"\n",(0,t.jsx)(n.li,{children:"thread_local Storage Class"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"storage class"}),(0,t.jsx)(n.th,{children:"keyword"}),(0,t.jsx)(n.th,{children:"lifetime"}),(0,t.jsx)(n.th,{children:"visibility"}),(0,t.jsx)(n.th,{children:"initial value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Automatic"}),(0,t.jsx)(n.td,{children:"auto"}),(0,t.jsx)(n.td,{children:"function block"}),(0,t.jsx)(n.td,{children:"local"}),(0,t.jsx)(n.td,{children:"garbage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"external"}),(0,t.jsx)(n.td,{children:"extern"}),(0,t.jsx)(n.td,{children:"whole program"}),(0,t.jsx)(n.td,{children:"global"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static"}),(0,t.jsx)(n.td,{children:"static"}),(0,t.jsx)(n.td,{children:"whole program"}),(0,t.jsx)(n.td,{children:"local"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"register(deprecated in C++17)"}),(0,t.jsx)(n.td,{children:"register"}),(0,t.jsx)(n.td,{children:"block"}),(0,t.jsx)(n.td,{children:"local"}),(0,t.jsx)(n.td,{children:"garbage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mutable"}),(0,t.jsx)(n.td,{children:"mutable"}),(0,t.jsx)(n.td,{children:"class"}),(0,t.jsx)(n.td,{children:"local"}),(0,t.jsx)(n.td,{children:"garbage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"thread local"}),(0,t.jsx)(n.td,{children:"thread_local"}),(0,t.jsx)(n.td,{children:"whole thread"}),(0,t.jsx)(n.td,{children:"local or global"}),(0,t.jsx)(n.td,{children:"garbage"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"auto",children:"auto"}),"\n",(0,t.jsx)(n.p,{children:"The auto storage class is the default class of all the variables declared inside a block. The auto stands for automatic and all the local variables that are declared in a block automatically belong to this class."}),"\n",(0,t.jsx)(n.p,{children:"Properties of auto Storage Class Objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scope: Local"}),"\n",(0,t.jsx)(n.li,{children:"Default Value: Garbage Value"}),"\n",(0,t.jsx)(n.li,{children:"Memory Location: RAM"}),"\n",(0,t.jsx)(n.li,{children:"Lifetime: Till the end of its scope"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"extern-storage-class",children:"extern Storage Class"}),"\n",(0,t.jsx)(n.p,{children:"The extern storage class simply tells us that the variable is defined elsewhere and not within the same block where it is used (i.e. external linkage). Basically, the value is assigned to it in a different block and this can be overwritten/changed in a different block as well. An extern variable is nothing but a global variable initialized with a legal value where it is declared in order to be used elsewhere."}),"\n",(0,t.jsx)(n.p,{children:"A normal global variable can be made extern as well by placing the \u2018extern\u2019 keyword before its declaration/definition in any function/block. The main purpose of using extern variables is that they can be accessed between two different files which are part of a large program."}),"\n",(0,t.jsx)(n.p,{children:"Properties of extern Storage Class Objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scope: Global"}),"\n",(0,t.jsx)(n.li,{children:"Default Value: Zero"}),"\n",(0,t.jsx)(n.li,{children:"Memory Location: RAM"}),"\n",(0,t.jsx)(n.li,{children:"Lifetime: Till the end of the program."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nusing namespace std;\n \n// declaring the variable which is to\n// be made extern an initial value can\n// also be initialized to x\nint x;\nvoid externStorageClass()\n{\n \n    cout << "Demonstrating extern class\\n";\n \n    // telling the compiler that the variable\n    // x is an extern variable and has been\n    // defined elsewhere (above the main\n    // function)\n    extern int x;\n \n    // printing the extern variables \'x\'\n    cout << "Value of the variable \'x\'"\n         << "declared, as extern: " << x << "\\n";\n \n    // value of extern variable x modified\n    x = 2;\n \n    // printing the modified values of\n    // extern variables \'x\'\n    cout << "Modified value of the variable \'x\'"\n         << " declared as extern: "\n         << x;\n}\n \nint main()\n{\n \n    // To demonstrate extern Storage Class\n    externStorageClass();\n \n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="output"',children:"Demonstrating extern class\nValue of the variable 'x'declared, as extern: 0\nModified value of the variable 'x' declared as extern: 2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"static",children:"static"}),"\n",(0,t.jsx)(n.p,{children:"The static storage class is used to declare static variables which are popularly used while writing programs in C++ language. Static variables have the property of preserving their value even after they are out of their scope! Hence, static variables preserve the value of their last use in their scope."}),"\n",(0,t.jsx)(n.p,{children:"We can say that they are initialized only once and exist until the termination of the program. Thus, no new memory is allocated because they are not re-declared. Global static variables can be accessed anywhere in the program."}),"\n",(0,t.jsx)(n.p,{children:"Properties of static Storage Class"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scope: Local"}),"\n",(0,t.jsx)(n.li,{children:"Default Value: Zero"}),"\n",(0,t.jsx)(n.li,{children:"Memory Location: RAM"}),"\n",(0,t.jsx)(n.li,{children:"Lifetime: Till the end of the program"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nusing namespace std;\n \n// Function containing static variables\n// memory is retained during execution\nint staticFun()\n{\n    cout << "For static variables: ";\n    static int count = 0;\n    count++;\n    return count;\n}\n \n// Function containing non-static variables\n// memory is destroyed\nint nonStaticFun()\n{\n    cout << "For Non-Static variables: ";\n \n    int count = 0;\n    count++;\n    return count;\n}\n \nint main()\n{\n \n    // Calling the static parts\n    cout << staticFun() << "\\n";\n    cout << staticFun() << "\\n";\n     \n \n    // Calling the non-static parts\n \n    cout << nonStaticFun() << "\\n";\n     \n    cout << nonStaticFun() << "\\n";\n     \n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="output"',children:"For static variables: 1\nFor static variables: 2\nFor Non-Static variables: 1\nFor Non-Static variables: 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"The static keyword has different meanings when used with different types. We can use static keywords with:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Static Variables: Variables in a function, Variables in a class","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Static variables in a Function: When a variable is declared as static, space for it gets allocated for the lifetime of the program. Even if the function is called multiple times, space for the static variable is allocated only once and the value of the variable in the previous call gets carried through the next function call. This is useful for implementing coroutines in C/C++ or any other application where the previous state of function needs to be stored."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Static Members of Class: Class objects and Functions in a class Let us now look at each one of these uses of static in detail."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"static-variables",children:"static variables"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <string>\nusing namespace std;\n \nvoid demo()\n{\n    // static variable\n    static int count = 0;\n    cout << count << " ";\n \n    // value is updated and\n    // will be carried to next\n    // function calls\n    count++;\n}\n \nint main()\n{\n    for (int i = 0; i < 5; i++)\n        demo();\n    return 0;\n}\n//output: 0 1 2 3 4\n'})}),"\n",(0,t.jsx)(n.p,{children:"Static variables in a class: As the variables declared as static are initialized only once as they are allocated space in separate static storage so, the static variables in a class are shared by the objects. There can not be multiple copies of the same static variables for different objects. Also because of this reason static variables can not be initialized using constructors."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nusing namespace std;\n \nclass GfG {\npublic:\n    static int i;\n \n    GfG(){\n        // Do nothing\n    };\n};\n \nint main()\n{\n    GfG obj1;\n    GfG obj2;\n    obj1.i = 2;\n    obj2.i = 3;\n \n    // prints value of i\n    cout << obj1.i << " " << obj2.i;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"undefined reference to `GfG::i'\ncollect2: error: ld returned 1 exit status\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can see in the above program that we have tried to create multiple copies of the static variable i for multiple objects. But this didn\u2019t happen. So, a static variable inside a class should be initialized explicitly by the user using the class name and scope resolution operator outside the class as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nusing namespace std;\n \nclass GfG {\npublic:\n    static int i;\n \n    GfG(){\n        // Do nothing\n    };\n};\n \nint GfG::i = 1;\n \nint main()\n{\n    GfG obj;\n    // prints value of i\n    cout << obj.i;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"1\n"})}),"\n",(0,t.jsx)(n.h4,{id:"static-members-of-class",children:"Static Members of Class"}),"\n",(0,t.jsx)(n.p,{children:"Class objects as static: Just like variables, objects also when declared as static have a scope till the lifetime of the program. Consider the below program where the object is non-static."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nusing namespace std;\n \nclass GfG {\n    int i;\n \npublic:\n    GfG()\n    {\n        i = 0;\n        cout << "Inside Constructor\\n";\n    }\n    ~GfG() { cout << "Inside Destructor\\n"; }\n};\n \nint main()\n{\n    int x = 0;\n    if (x == 0) {\n        GfG obj;\n    }\n    cout << "End of main\\n";\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"Inside Constructor\nInside Destructor\nEnd of main\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the above program, the object is declared inside the if block as non-static. So, the scope of a variable is inside the if block only. So when the object is created the constructor is invoked and soon as the control of if block gets over the destructor is invoked as the scope of the object is inside the if block only where it is declared. Let us now see the change in output if we declare the object as static."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nusing namespace std;\n \nclass GfG {\n    int i = 0;\n \npublic:\n    GfG()\n    {\n        i = 0;\n        cout << "Inside Constructor\\n";\n    }\n \n    ~GfG() { cout << "Inside Destructor\\n"; }\n};\n \nint main()\n{\n    int x = 0;\n    if (x == 0) {\n        static GfG obj;\n    }\n    cout << "End of main\\n";\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"Inside Constructor\nEnd of main\nInside Destructor\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can clearly see the change in output. Now the destructor is invoked after the end of the main. This happened because the scope of static objects is throughout the lifetime of the program."}),"\n",(0,t.jsx)(n.p,{children:"Static functions in a class: Just like the static data members or static variables inside the class, static member functions also do not depend on the object of the class. We are allowed to invoke a static member function using the object and the \u2018.\u2019 operator but it is recommended to invoke the static members using the class name and the scope resolution operator. Static member functions are allowed to access only the static data members or other static member functions, they can not access the non-static data members or member functions of the class."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'// C++ program to demonstrate static\n// member function in a class\n#include <iostream>\nusing namespace std;\n \nclass GfG {\npublic:\n    // static member function\n    static void printMsg() { cout << "Welcome to GfG!"; }\n};\n \n// main function\nint main()\n{\n    // invoking a static member function\n    GfG::printMsg();\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"Welcome to GfG!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"register",children:"register"}),"\n",(0,t.jsx)(n.p,{children:"The register storage class declares register variables using the \u2018register\u2019 keyword which has the same functionality as that of the auto variables. The only difference is that the compiler tries to store these variables in the register of the microprocessor if a free register is available. This makes the use of register variables to be much faster than that of the variables stored in the memory during the runtime of the program. If a free register is not available, these are then stored in the memory only."}),"\n",(0,t.jsx)(n.p,{children:"An important and interesting point to be noted here is that we cannot obtain the address of a register variable using pointers."}),"\n",(0,t.jsx)(n.p,{children:"Properties of register Storage Class Objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scope: Local"}),"\n",(0,t.jsx)(n.li,{children:"Default Value: Garbage Value"}),"\n",(0,t.jsx)(n.li,{children:"Memory Location: Register in CPU or RAM"}),"\n",(0,t.jsx)(n.li,{children:"Lifetime: Till the end of its scope"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nusing namespace std;\n \nvoid registerStorageClass()\n{\n \n    cout << \"Demonstrating register class\\n\";\n \n    // declaring a register variable\n    register char b = 'G';\n \n    // printing the register variable 'b'\n    cout << \"Value of the variable 'b'\"\n         << \" declared as register: \" << b;\n}\nint main()\n{\n \n    // To demonstrate register Storage Class\n    registerStorageClass();\n    return 0;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mutable",children:"mutable"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes there is a requirement to modify one or more data members of class/struct through the const function even though you don\u2019t want the function to update other members of class/struct. This task can be easily performed by using the mutable keyword. The keyword mutable is mainly used to allow a particular data member of a const object to be modified."}),"\n",(0,t.jsx)(n.p,{children:"When we declare a function as const, this pointer passed to the function becomes const. Adding a mutable to a variable allows a const pointer to change members."}),"\n",(0,t.jsx)(n.p,{children:"The mutable specifier does not affect the linkage or lifetime of the object. It will be the same as the normal object declared in that place."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\nusing std::cout;\n \nclass Test {\npublic:\n    int x;\n \n    // defining mutable variable y\n    // now this can be modified\n    mutable int y;\n \n    Test()\n    {\n        x = 4;\n        y = 10;\n    }\n};\n \nint main()\n{\n    // t1 is set to constant\n    const Test t1;\n \n    // trying to change the value\n    t1.y = 20;\n    cout << t1.y;\n \n    // Uncommenting below lines\n    // will throw error\n    // t1.x = 8;\n    // cout << t1.x;\n    return 0;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="output"',children:"20\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var t=a(96540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);