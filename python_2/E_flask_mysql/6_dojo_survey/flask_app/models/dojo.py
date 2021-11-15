from flask_app.config.mysqlconnection import connectToMySQL
from .ninja import Ninja

class Dojo: #instance of the class = object
        db="dojos_ninjas_schema"
        def __init__( self , data ):
                self.id = data['id']
                self.name = data['name']
                self.created_at = data['created_at']
                self.updated_at = data['updated_at']
                self.ninjas = []

        @classmethod
        def get_all(cls):
                query = "SELECT * FROM dojos;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
                results = connectToMySQL(cls.db).query_db(query)
        # Create an empty list to append our instances of dojos
                dojos = []
        # Iterate over the db results and create instances of dojos with cls.
                for dojo in results:
                        dojos.append( cls(dojo) )
                return dojos

# gets all the dojos and returns them in a list of user objects
# class method to save our dojos to the database
        @classmethod
        def save(cls, data ):
                query = "INSERT INTO dojos (name) VALUES (%(name)s);"
                return connectToMySQL(cls.db).query_db(query,data)

        @classmethod
        def get_one_dojo(cls,data):
                query = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
                results = connectToMySQL(cls.db).query_db(query,data)
                current_dojo = cls(results[0])
                # print(results)
                # print(current dojo.id)
                for field in results:
                        member = {
                                'id':field['ninjas.id'],
                                'first_name': field['first_name'],
                                'last_name': field['last_name'],
                                'age': field['age'],
                                'dojo_id': field['dojo_id'],
                                'created_at': field['ninjas.created_at'],
                                'updated_at': field['ninjas.updated_at']
                        }
                        current_dojo.ninjas.append(Ninja(member))
                return current_dojo