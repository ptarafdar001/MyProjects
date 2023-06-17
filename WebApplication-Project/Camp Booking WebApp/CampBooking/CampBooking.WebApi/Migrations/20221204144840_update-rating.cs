using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CampBooking.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class updaterating : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Star",
                table: "Ratings",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Star",
                table: "Ratings");
        }
    }
}
