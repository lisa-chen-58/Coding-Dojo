from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Ninja:
        db="dojos_ninjas_schema"
        def __init__( self , data ):
                self.id = data['id']
                self.first_name = data['first_name']
                self.last_name = data['last_name']
                self.age = data['age']
                self.dojo_id = data['dojo_id']
                self.created_at = data['created_at']
                self.updated_at = data['updated_at']

        @staticmethod
        def validate_ninja(ninja):
                is_valid = True # we assume this is true
                if len(ninja['first_name']) < 3:
                        flash("Name must be at least 3 characters.")
                        is_valid = False
                if len(ninja['last_name']) < 2:
                        flash("Location must be at least 2 characters.")
                        is_valid = False
                if ninja['age']== "":
                        flash("Age must not be blank")
                        is_valid = False
                elif int(ninja['age']) < 3:
                        flash("Age must be older than 5.")
                        is_valid = False
                return is_valid

# gets all the users and returns them in a list of user objects
# class method to save our users to the database
        @classmethod
        def save(cls, data ):
                query = "INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
                return connectToMySQL(cls.db).query_db(query,data)

        @classmethod
        def get_one_ninja(cls,data):
                query = "SELECT * FROM ninjas WHERE ninjas.id = %(id)s;"
                results = connectToMySQL(cls.db).query_db(query,data)
                current_ninja = cls(results[0])
                print(results)
                print(current_ninja.id)
                # for field in results:
                #         member = {
                #                 'id':field['ninjas.id'],
                #                 'first_name': field['first_name'],
                #                 'last_name': field['last_name'],
                #                 'age': field['age'],
                #                 'dojo_id': field['dojo_id'],
                #                 'created_at': field['ninjas.created_at'],
                #                 'updated_at': field['ninjas.updated_at']
                #         }
                #         current_dojo.ninjas.append(Ninja(member))
                return connectToMySQL(cls.db).query_db(query,data)