<!DOCTYPE html>
<html>
    <body>
        <h2>add</h2>
        <p>addinng
        </p>
        <p> id="demo</p>
        <script>
            const myObject={
                firstName:"menka",
                lastname:"rajak",
                fullName:function(){
                    return this.firstName+ "" +
                    this.lastname;
                    document.getElementById("demo").innerHTML=myObject.full.name();
                    TML=myObject.fullName();

                }
            }
        </script>

    </body>
</html>