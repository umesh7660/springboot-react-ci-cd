package com.smartmeter;

import javax.sql.DataSource;
import org.springframework.stereotype.Component;
import javax.annotation.PreDestroy;
import java.sql.Connection;
import java.sql.SQLException;

@Component
public class ShutdownHandler {

    private final DataSource dataSource;

    public ShutdownHandler(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @PreDestroy
    public void closeDataSource() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn != null && !conn.isClosed()) {
                conn.close();
                System.out.println("Database connection closed successfully.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
